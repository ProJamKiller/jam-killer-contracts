import { useState, useEffect } from "react";
import { useSwap } from "../hooks/useSwap";
import { ethers } from "ethers";

const Swap = () => {
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const { burnPJKAndSwap, loading } = useSwap(provider);

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);

  const handleSwap = async () => {
    if (!amount) return;
    const result = await burnPJKAndSwap(amount);
    alert(result.message);
  };

  return (
    <div className="swap-container">
      <h2>Burn PJK & Receive Mojo</h2>
      <input 
        type="number"
        placeholder="Enter PJK amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSwap} disabled={loading || !amount}>
        {loading ? "Processing..." : "Burn & Swap"}
      </button>
    </div>
  );
};

export default Swap;