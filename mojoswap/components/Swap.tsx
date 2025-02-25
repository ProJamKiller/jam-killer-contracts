import { useState, useEffect } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { useSwap } from "../hooks/useSwap";


const Swap = () => {
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const { burnPJKAndSwap, loading } = useSwap(provider);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setProvider(new BrowserProvider(window.ethereum));
    }
  }, []);

  const handleSwap = async () => {
    if (!amount) return;
    const result = await burnPJKAndSwap(amount);
    alert(result.message);
  };

  return (
    <div className="swap-container">
      <img src="https://bafybeihjuxunsejxj5banr5lrvs45b7hozwdw4kwxloqz2gk64ajmqbthq.ipfs.dweb.link?filename=1080.gif" 
           alt="Mojo Logo" className="mojo-logo" />
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