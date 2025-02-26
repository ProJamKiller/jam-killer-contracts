import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";

export default function SwapPage() {
  return (
    <ThirdwebProvider clientId="bbe8e76145bedb13c2002e2fe26d864acd">
      <div className="swap-page">
        {/* Connect Wallet Button */}
        <div className="connect-container">
          <ConnectWallet theme="dark" />
        </div>
        
        {/* Swap Box */}
        <div className="swap-container">
          <img
            src="https://bafybeihjuxunsejxj5banr5lrvs45b7hozwdw4kwxloqz2gk64ajmqbthq.ipfs.dweb.link?filename=1080.gif"
            alt="Mojo Logo"
            className="mojo-logo"
          />
          <input type="text" placeholder="Enter amount" />
          <button>Swap</button>
        </div>
      </div>
    </ThirdwebProvider>
  );
}

/* CSS (Add this to your global CSS file) */
const styles = `
  .connect-container {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
  }

  .swap-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
`;

export const GlobalStyles = () => (
  <style>{styles}</style>
);
