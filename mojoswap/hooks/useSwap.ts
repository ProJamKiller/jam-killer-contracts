import { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { MOJO_SWAP_CONTRACT, PJK_BURNER_ADDRESS } from "../constants/contracts";
import erc20Abi from "../constants/erc20Abi.json"; // PJKBurner uses this
import swapAbi from "../constants/swapAbi.json"; 

export const useSwap = (provider: BrowserProvider | null) => {
  const [loading, setLoading] = useState(false);

  const burnPJKAndSwap = async (amount: string) => {
    if (!provider) throw new Error("No wallet connected");
    setLoading(true);

    try {
      const signer = await provider.getSigner();
      const pjkBurner = new Contract(PJK_BURNER_ADDRESS, erc20Abi, signer); // PJKBurner uses ERC-20 ABI
      const mojoSwap = new Contract(MOJO_SWAP_CONTRACT, swapAbi, signer);
      
      const weiAmount = parseUnits(amount, 18);

      // Approve the burner contract to spend PJK
      const approveTx = await pjkBurner.approve(PJK_BURNER_ADDRESS, weiAmount);
      await approveTx.wait();

      // Burn PJK
      const burnTx = await pjkBurner.burn(weiAmount);
      await burnTx.wait();

      // Swap for Mojo
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