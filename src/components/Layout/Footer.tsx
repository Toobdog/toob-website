"use client";

import Image from "next/image";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import { Link as ScrollLink } from "react-scroll";

import Logo from "@/assets/logo-full.png";
import X from "@/components/svgs/X";
import Telegram from "@/components/svgs/Telegram";
import Tiktok from "@/components/svgs/Tiktok";
import Social from "@/components/svgs/Social";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="flex justify-center relative overflow-hidden text-white pt-7 lg:pt-32 pl-[30px] lg:pl-[100px] 2xl:pl-[140px] pr-[20px] lg:pr-[80px] 2xl:pr-[120px] pb-6 lg:pb-[50px]">
      <div className="container px-0 z-[1]">
        <div className="flex max-md:flex-wrap justify-between lg:space-x-16">
          <div className="max-md:w-full">
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="max-lg:w-[200px] max-md:mx-auto"
            />
            <p className="text-xs lg:text-lg mt-4 lg:mt-3 leading-8 max-md:text-center md:max-w-[360px] lg:max-w-[480px]">
              Join the Toob community and start your crypto journey by
              meme-inspired fun and decentralized finance innovation. Explore
              Toob It, our AI-powered image transformation tool and make your
              own toob memes. Together, let&apos;s embark on a journey of
              creativity and laughter. To the moon with Toob.
            </p>
          </div>
          <div
            className={`flex flex-col min-w-[110px] xl:min-w-[170px] max-md:mt-7 ${luckiestGuy.className}`}
          >
            <h4 className="text-sm lg:text-2xl uppercase">Products</h4>
            <ScrollLink
              to="toob-it"
              smooth
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-[30px] lg:mt-10 cursor-pointer"
            >
              TOOB IT
            </ScrollLink>
            <Link
              href="https://toob.finance"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              TOOB Finance
            </Link>
            <ScrollLink
              to="chat"
              smooth
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7 cursor-pointer"
            >
              TOOB CHAT
            </ScrollLink>
          </div>
          <div
            className={`flex flex-col min-w-[120px] xl:min-w-[170px] max-md:mt-7 ${luckiestGuy.className}`}
          >
            <h4 className="text-sm lg:text-2xl uppercase">Token</h4>
            <Link
              href="https://www.geckoterminal.com/arbitrum/pools/0xe331be1eb677e3b3b047274757f992369d9c319e"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-[30px] lg:mt-10"
            >
              Geckoterminal
            </Link>
            <Link
              href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0xe331be1eb677e3b3b047274757f992369d9c319e?t=1714484998424"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              Dextools
            </Link>
            <Link
              href="https://dexscreener.com/arbitrum/0xe331be1eb677e3b3b047274757f992369d9c319e"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              DexScreener
            </Link>
          </div>
          <div
            className={`flex flex-col max-md:w-[108px] max-md:max-w-[calc(100%-170px)] lg:min-w-fit max-md:mt-7 ${luckiestGuy.className}`}
          >
            <h4 className="text-sm lg:text-2xl uppercase">Socials</h4>
            <Link
              href="https://x.com/thetoobdog?s=21&t=QYd3sdnmj6S0oEl_tQzGqg"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-[30px] lg:mt-10"
            >
              X (Twitter)
            </Link>
            <Link
              href="https://t.me/tooobdog"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              Telegram
            </Link>
            <Link
              href="https://www.tiktok.com/@the.toob.dog?_t=8lxQUIUnVvb&_r=1"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              Tiktok
            </Link>
            <Link
              href="https://sanko.tv/thetoobdog"
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-lg hover:brightness-90 transition-all mt-6 lg:mt-7"
            >
              Sanko.tv
            </Link>
          </div>
        </div>
        <div
          className={`text-xl lg:text-4xl text-center mt-[34px] md:mt-[50px] ${luckiestGuy.className}`}
        >
          The TOOB DOG
        </div>
        <div className="text-center">
          <Link
            href={"mailto:the@toob.dog"}
            target="_blank"
            rel="noreferrer"
            className="mx-auto max-md:text-xs hover:brightness-90 transition-all"
          >
            the@toob.dog
          </Link>
        </div>
        <div
          className={`text-xs lg:text-lg text-center mt-2 ${luckiestGuy.className}`}
        >
          All rights toobed 2024.
        </div>
        <div className="flex justify-center space-x-3 lg:space-x-4 mt-3 lg:mt-7">
          <Link
            href={"https://x.com/thetoobdog?s=21&t=QYd3sdnmj6S0oEl_tQzGqg"}
            target="_blank"
            rel="noreferrer"
            className="hover:brightness-90 transition-all"
          >
            <X className="max-lg:w-[18px] max-lg:h-[18px]" />
          </Link>
          <Link
            href={"https://t.me/tooobdog"}
            target="_blank"
            rel="noreferrer"
            className="hover:brightness-90 transition-all"
          >
            <Telegram className="max-lg:w-[18px] max-lg:h-[18px]" />
          </Link>
          <Link
            href={"https://www.tiktok.com/@the.toob.dog?_t=8lxQUIUnVvb&_r=1"}
            target="_blank"
            rel="noreferrer"
            className="hover:brightness-90 transition-all"
          >
            <Tiktok className="max-lg:w-[18px] max-lg:h-[18px]" />
          </Link>
          <Link
            href={"https://sanko.tv/thetoobdog"}
            target="_blank"
            rel="noreferrer"
            className="hover:brightness-90 transition-all"
          >
            <Social className="max-lg:w-[18px] max-lg:h-[18px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
