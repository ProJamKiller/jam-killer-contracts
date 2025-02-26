import { ThirdwebProvider, ConnectWallet, useAddress } from "@thirdweb-dev/react";

interface AllowList {
  allow_list: string[];
}

export default function SwapPage() {
  const address = useAddress(); // Add this line to get the address
  const allowList: AllowList = require('../constants/allowlist.json');
  const isAllowed = address ? (allowList as AllowList).allow_list.includes(address.toLowerCase()) : false;

  return (
    <ThirdwebProvider activeChain="ethereum" clientId="bbe8e76145bedb13c2002e2fe26d864acd">
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ConnectWallet theme="dark" modalSize="compact" />
      </div>
      
      <div className="swap-container">
        <img
          src="https://bafybeihjuxunsejxj5banr5lrvs45b7hozwdw4kwxloqz2gk64ajmqbthq.ipfs.dweb.link?filename=1080.gif"
          alt="Mojo Logo"
          className="mojo-logo"
        />
        
        {address && !isAllowed ? (
          <div style={{ color: '#ff9800', marginTop: '15px', fontSize: '16px' }}>
            Address not on allowlist
          </div>
        ) : (
          <>
            <input 
              type="number" 
              placeholder="Enter amount" 
              disabled={!isAllowed}
            />
            <button disabled={!isAllowed}>
              Swap
            </button>
          </>
        )}
      </div>
    </ThirdwebProvider>
  );
}
