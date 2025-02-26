// pages/_app.tsx
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;