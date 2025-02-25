import { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { MOJO_SWAP_CONTRACT, PJK_BURNER_ADDRESS } from "../constants/contracts";
import pjkBurnerAbi from "../constants/pjkBurnerAbi.json"; // Use the ABI that includes burnPJK
import swapAbi from "../constants/swapAbi.json";

export const useSwap = (provider: BrowserProvider | null) => {
  const [loading, setLoading] = useState(false);

  const burnPJKAndSwap = async (amount: string) => {
    if (!provider) throw new Error("No wallet connected");
    setLoading(true);

    try {
      const signer = await provider.getSigner();
      // Instantiate the PJKBurner contract using its correct ABI
      const pjkBurner = new Contract(PJK_BURNER_ADDRESS, pjkBurnerAbi, signer);
      // Instantiate the MojoSwap contract using its ABI
      const mojoSwap = new Contract(MOJO_SWAP_CONTRACT, swapAbi, signer);
      
      const weiAmount = parseUnits(amount, 18);

      // Approve the burner contract to spend PJK tokens
      const approveTx = await pjkBurner.approve(PJK_BURNER_ADDRESS, weiAmount);
      await approveTx.wait();

      // Call the correct burn function (burnPJK) on the PJKBurner contract
      const burnTx = await pjkBurner.burnPJK(weiAmount);
      await burnTx.wait();

      // Call the swap function on the MojoSwap contract to swap burned PJK for Mojo
      const swapTx = await mojoSwap.swap(weiAmount);
      await swapTx.wait();

      return { success: true, message: `Burned ${amount} PJK and received Mojo.` };
    } catch (error) {
      console.error("Swap failed", error);
      return { success: false, message: "Swap failed. Check console for details." };
    } finally {
      setLoading(false);
    }
  };

  return { burnPJKAndSwap, loading };
};