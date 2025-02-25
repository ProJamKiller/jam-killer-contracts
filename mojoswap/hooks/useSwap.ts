import { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { MOJO_SWAP_CONTRACT } from "../constants/contracts";
import pjkTokenAbi from "../constants/pjkTokenAbi.json";
import swapAbi from "../constants/swapAbi.json";

export const useSwap = (provider: BrowserProvider | null) => {
  const [loading, setLoading] = useState(false);

  const burnPJKAndSwap = async (amount: string) => {
    if (!provider) throw new Error("Please connect your wallet");
    setLoading(true);

    const DUMMY_ADDRESS = "0x000000000000000000000000000000000000dEaD"; // Black hole
    const PJK_TOKEN_ADDRESS = "0xfc0E40e7D6AbA1079409966bcAcB2273f048Da5F"; // PJK token

    try {
      const network = await provider.getNetwork();
      console.log("Network chainId:", network.chainId.toString());
      if (network.chainId !== BigInt(137)) throw new Error("Switch to Polygon Mainnet");

      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      console.log("Connected wallet:", userAddress);

      const weiAmount = parseUnits(amount, 18);
      console.log("Transfer amount (wei):", weiAmount.toString());

      // Transfer PJK to dummy address
      const pjkToken = new Contract(PJK_TOKEN_ADDRESS, pjkTokenAbi, signer);
      console.log("Transferring PJK to:", DUMMY_ADDRESS);
      const transferTx = await pjkToken.transfer(DUMMY_ADDRESS, weiAmount, { gasLimit: 100000 });
      console.log("Transfer TX:", transferTx.hash);
      await transferTx.wait();
      console.log("PJK tokens transferred to dummy address");

      // Swap for Mojo
      const mojoSwap = new Contract(MOJO_SWAP_CONTRACT, swapAbi, signer);
      console.log("Swapping for Mojo at:", MOJO_SWAP_CONTRACT);
      const swapTx = await mojoSwap.swap(weiAmount, { gasLimit: 300000 });
      console.log("Swap TX:", swapTx.hash);
      await swapTx.wait();
      console.log("Mojo tokens delivered");

      return { 
        success: true, 
        message: `Moved ${amount} PJK to dummy address and swapped for Mojo` 
      };
    } catch (error: any) {
      console.error("Error during swap process:", error);
      return { 
        success: false, 
        message: `Swap failed: ${error.message || "Unknown error"}` 
      };
    } finally {
      setLoading(false);
    }
  };

  return { burnPJKAndSwap, loading };
};