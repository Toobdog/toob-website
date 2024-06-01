"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Logo from "@/assets/logo-full.png";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import X from "../svgs/X";
import Telegram from "../svgs/Telegram";
import Tiktok from "../svgs/Tiktok";
import Social from "../svgs/Social";
import Hambuger from "../svgs/Hambuger";
import Navbar from "./Navbar";
import { useState } from "react";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="max-lg:sticky max-lg:top-0 relative bg-black flex justify-center lg:justify-between items-center px-[10px] xl:px-[30px] py-3 md:py-4 z-10">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="max-md:w-[180px] max-xl:w-[340px]"
        />
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
          <ScrollLink
            to="about"
            smooth
            className="text-lg cursor-pointer hover:brightness-90 transition-alls"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="token"
            smooth
            className="text-lg cursor-pointer hover:brightness-90 transition-alls"
          >
            Tokenomics
          </ScrollLink>
          <ScrollLink
            to="toob-it"
            smooth
            className="text-lg cursor-pointer hover:brightness-90 transition-alls"
          >
            TOOB IT
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth
            className="text-lg cursor-pointer hover:brightness-90 transition-alls"
          >
            Faq
          </ScrollLink>
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            href={"https://x.com/thetoobdog?s=21&t=QYd3sdnmj6S0oEl_tQzGqg"}
            target="_blank"
            rel="noreferrer"
            className="mr-3 xl:mr-4 hover:brightness-90 transition-all"
          >
            <X />
          </Link>
          <Link
            href={"https://t.me/tooobdog"}
            target="_blank"
            rel="noreferrer"
            className="mr-3 xl:mr-4 hover:brightness-90 transition-all"
          >
            <Telegram />
          </Link>
          <Link
            href={"https://www.tiktok.com/@the.toob.dog?_t=8lxQUIUnVvb&_r=1"}
            target="_blank"
            rel="noreferrer"
            className="mr-3 xl:mr-4 hover:brightness-90 transition-all"
          >
            <Tiktok />
          </Link>
          <Link
            href={"https://sanko.tv/thetoobdog"}
            target="_blank"
            rel="noreferrer"
            className="mr-6 xl:mr-20 hover:brightness-90 transition-all"
          >
            <Social />
          </Link>
          <Link
            href={"https://toob.finance"}
            target="_blank"
            rel="noreferrer"
            className={`text-xl text-black py-4 px-8 xl:px-12 rounded-full bg-[linear-gradient(90deg,#E5A301_0%,#FFF500_101.5%)] hover:brightness-90 transition-all ${luckiestGuy.className}`}
          >
            BUY TOOB
          </Link>
        </div>
        <button
          className="lg:hidden absolute right-5 md:right-[60px]"
          onClick={() => setMobileOpen(true)}
        >
          <Hambuger className="max-md:w-6 max-md:h-6" />
        </button>
      </header>
      <Navbar open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
};

export default Header;
