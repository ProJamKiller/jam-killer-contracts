import { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { MOJO_SWAP_CONTRACT, PJK_BURNER_ADDRESS, PJK_TOKEN_ADDRESS } from "../constants/contracts";
import pjkTokenAbi from "../constants/pjkTokenAbi.json"; // ABI for PJK token (ERC-20)
import pjkBurnerAbi from "../constants/pjkBurnerAbi.json"; // ABI for PJKBurner contract
import swapAbi from "../constants/swapAbi.json"; // ABI for MojoSwap contract

export const useSwap = (provider: BrowserProvider | null) => {
  const [loading, setLoading] = useState(false);

  const burnPJKAndSwap = async (amount: string) => {
    if (!provider) {
      throw new Error("Please connect your wallet");
    }

    setLoading(true);

    try {
      // Get the signer from the provider
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      console.log("Connected wallet:", userAddress);

      // Instantiate contracts with their respective ABIs
      const pjkToken = new Contract(PJK_TOKEN_ADDRESS, pjkTokenAbi, signer);
      const pjkBurner = new Contract(PJK_BURNER_ADDRESS, pjkBurnerAbi, signer);
      const mojoSwap = new Contract(MOJO_SWAP_CONTRACT, swapAbi, signer);

      // Convert amount to wei (assuming 18 decimals for PJK)
      const weiAmount = parseUnits(amount, 18);
      console.log("Swap amount (wei):", weiAmount.toString());

      // Check user’s PJK balance
      const balance = await pjkToken.balanceOf(userAddress);
      console.log("PJK balance (wei):", balance.toString());
      if (balance < weiAmount) {
        throw new Error("Insufficient PJK balance");
      }

      // Check and adjust allowance for the burner
      const allowance = await pjkToken.allowance(userAddress, PJK_BURNER_ADDRESS);
      console.log("Current allowance (wei):", allowance.toString());
      if (allowance > BigInt(0) && allowance < weiAmount) {
        console.log("Resetting allowance to 0 before approving new amount...");
        const resetTx = await pjkToken.approve(PJK_BURNER_ADDRESS, 0, { gasLimit: 100000 });
        await resetTx.wait();
      }
      if (allowance < weiAmount) {
        console.log("Approving burner to spend PJK...");
        const approveTx = await pjkToken.approve(PJK_BURNER_ADDRESS, weiAmount, { gasLimit: 100000 });
        await approveTx.wait();
      }

      // Burn the PJK tokens
      console.log("Burning PJK tokens...");
      const burnTx = await pjkBurner.burnPJK(weiAmount, { gasLimit: 200000 });
      await burnTx.wait();
      console.log("PJK tokens burned successfully");

      // Swap for Mojo tokens
      console.log("Swapping for Mojo...");
      const swapTx = await mojoSwap.swap(weiAmount, { gasLimit: 300000 });
      await swapTx.wait();
      console.log("Swap completed");

      return {
        success: true,
        message: `Successfully burned ${amount} PJK and swapped for Mojo`,
      };
    } catch (error: any) {
      console.error("Error during swap process:", error);
      return {
        success: false,
        message: `Swap failed: ${error.message || "Unknown error"}`,
      };
    } finally {
      setLoading(false);
    }
  };

  return { burnPJKAndSwap, loading };
};