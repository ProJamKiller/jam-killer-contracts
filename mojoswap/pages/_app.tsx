// pages/_app.tsx

import React from "react";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Component {...pageProps} />
      
      {/* Put your global CSS snippet here */}
      <style jsx global>{`
        /* Swap Page - Modern Dark Theme with Responsive Background */
        body {
          background: url("https://bafybeihd45vo4kkn4h72mepr2mzpr4qmfagd3gbgt3mij77za54d74d4ba.ipfs.dweb.link?filename=PoweredbyMojo.png")
            no-repeat center center fixed;
          background-size: contain; /* Shows the whole image, scales proportionally */
          background-color: #ffffff; /* White fill for extra space */
          color: white;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Ensures full height coverage */
          width: 100vw; /* Full width */
        }

        /* Swap Box */
        .swap-container {
          max-width: 450px;
          width: 100%;
          padding: 30px;
          background: rgba(30, 30, 30, 0.85); /* Dark transparent overlay */
          border-radius: 12px;
          box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
          text-align: center;
          backdrop-filter: blur(5px); /* Adds a subtle blur for extra polish */
        }

        /* Logo */
        .mojo-logo {
          width: 180px;
          height: auto;
          margin-bottom: 20px;
          border-radius: 8px;
        }

        /* Swap Input */
        .swap-container input {
          width: 100%;
          padding: 12px;
          margin: 15px 0;
          border-radius: 8px;
          border: none;
          background: #2c2c2c;
          color: white;
          font-size: 16px;
          box-sizing: border-box; /* Ensures padding doesn’t overflow */
        }

        /* Swap Button */
        .swap-container button {
          width: 100%;
          padding: 12px;
          background: #ff9800;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
          border-radius: 8px;
          transition: background 0.3s, transform 0.2s; /* Smooth hover effects */
          font-weight: bold;
        }

        .swap-container button:hover {
          background: #e68900;
          transform: scale(1.03); /* Slight zoom on hover */
        }

        .swap-container button:disabled {
          background: gray;
          cursor: not-allowed;
          transform: none; /* No zoom when disabled */
        }

        /* Responsive Fixes */
        @media (max-width: 768px) {
          .swap-container {
            width: 90%;
            padding: 20px; /* Slightly less padding on smaller screens */
          }
        }
      `}</style>
    </ThirdwebProvider>
  );
}

export default MyApp;