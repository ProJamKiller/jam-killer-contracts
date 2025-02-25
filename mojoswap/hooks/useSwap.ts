import { useState } from "react";
import { ethers } from "ethers";
import { MOJO_SWAP_CONTRACT, PJK_BURNER_ADDRESS } from "../constants/contracts";
import erc20Abi from "../constants/erc20Abi.json";
import mojoSwapAbi from "../constants/mojoSwapAbi.json";
import pjkBurnerAbi from "../constants/pjkBurnerAbi.json";

export const useSwap = (provider: ethers.providers.Web3Provider | null) => {
  const [loading, setLoading] = useState(false);

  const burnPJKAndSwap = async (amount: string) => {
    if (!provider) throw new Error("No wallet connected");
    setLoading(true);

    try {
      const signer = provider.getSigner();
      const pjkBurner = new ethers.Contract(PJK_BURNER_ADDRESS, erc20Abi, signer);
      const mojoSwap = new ethers.Contract(MOJO_SWAP_CONTRACT, mojoSwapAbi, signer);
      
      const weiAmount = ethers.utils.parseUnits(amount, 18);

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