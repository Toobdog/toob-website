"use client";

import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import toast from "react-hot-toast";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

const Contract = () => {
  const onCopy = () => {
    navigator.clipboard.writeText("0x676F7ED2D4829460f73468b36Be49e0D6505107F");
    toast.success("Contract address copied in the clipboard!");
  };

  return (
    <div className="pt-11 lg:pt-[90px] pb-12 bg-black/20 flex flex-col items-center px-2">
      <h4 className={`text-xl lg:text-5xl ${luckiestGuy.className}`}>
        BUY TOOB
      </h4>
      <p className="text-xs lg:text-lg mt-2 lg:mt-5 text-center uppercase max-w-[600px] lg:max-w-[800px]">
        Toob devs developed innovative product that enables direct purchases of
        Toob token via card payment
      </p>
      <Link
        href={"https://toob.finance"}
        target="_blank"
        rel="noreferrer"
        className={`text-xs lg:text-2xl text-black py-3 lg:py-[18px] px-9 lg:px-16 rounded-full bg-[linear-gradient(90deg,#E5A301_0%,#FFF500_101.5%)] hover:scale-105 transition-all mt-5 lg:mt-11 ${luckiestGuy.className}`}
      >
        BUY TOOB
      </Link>
      <div
        className="text-[10px] text-center sm:text-xs lg:text-xl text-black py-2 lg:py-3 px-6 lg:px-10 bg-[#FFF500] rounded-full mt-4 lg:mt-10 cursor-pointer"
        onClick={onCopy}
      >
        CONTRACT ADDRESS: 0x676F7ED2D4829460f73468b36Be49e0D6505107F
      </div>
    </div>
  );
};

export default Contract;
