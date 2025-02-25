import dynamic from "next/dynamic";
import "../assets/swap.css";

const Swap = dynamic(() => import("../components/Swap"), { ssr: false });

export default function SwapPage() {
  return (
    <div>
      <Swap />
    </div>
  );
}