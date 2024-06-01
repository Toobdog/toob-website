import Image from "next/image"
import { Luckiest_Guy } from "next/font/google"
import Token from "@/assets/token.png"
import Burn from "@/assets/burn.png"
import Logo from "@/assets/logo.png"
import ArrowLeft from "./svgs/ArrowLeft"
import Arrow from "@/assets/arrow.png"
import Decoration from "@/assets/decoration1.png"
import Link from "next/link"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const Tokenomics = () => {
  return (
    <div id="token" className="relative pb-20 pt-4">
      <Image
        src={Decoration.src}
        width={Decoration.width}
        height={Decoration.height}
        alt="dec"
        className="absolute top-0 right-0 max-md:hidden md:w-[80px] lg:w-[100px]"
      />
      <div className="flex max-md:flex-col max-md:items-center">
        <div className="w-full md:w-1/2 flex justify-center items-end max-md:order-1 max-md:mt-9">
          <Image
            src={Token.src}
            width={Token.width}
            height={Token.height}
            alt="token"
            className="max-md:w-[200px] max-lg:w-[300px] max-xl:w-[360px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div
            className={`flex flex-col items-center ${luckiestGuy.className}`}
          >
            <div className="relative flex flex-col items-center">
              <Image
                src={Logo.src}
                width={Logo.width}
                height={Logo.height}
                alt="logo"
                className="absolute w-12 md:w-16 xl:w-20 -left-24 md:-left-32 xl:-left-[150px] -top-2.5 md:-top-3.5 xl:-top-5"
              />
              <ArrowLeft className="absolute -left-8 md:-left-12 xl:-left-14 -top-1.5 md:top-0 text-[#FFF500] rotate-180 w-[18px] md:w-8 xl:w-10" />
              <span className="text-lg md:text-3xl xl:text-4xl">
                TOKENOMICS
              </span>
              <span className="text-lg md:text-2xl xl:text-3xl">OVERVIEW</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mt-7 xl:mt-11">
              Ticker: <span className="text-[#FFF500]">TOOB</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mt-7 xl:mt-9">
              Total Supply:{" "}
              <span className="text-[#FFF500]">10.000.000.000</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mt-7 xl:mt-9">
              Liquidity: <span className="text-[#FFF500]">BURNED</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mt-7 xl:mt-9 text-center">
              No presale, No Taxes, No Contract Ownership
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="relative">
          <Image
            src={Arrow.src}
            width={Arrow.width}
            height={Arrow.height}
            alt="arrow"
            className="absolute -top-12 md:-top-7 left-0 md:-left-14 lg:-left-20 max-md:w-8 max-lg:w-10 max-md:rotate-90"
          />
          <Image
            src={Burn.src}
            width={Burn.width}
            height={Burn.height}
            alt="burn"
            className="max-lg:w-[300px] max-xl:w-[420px]"
          />
        </div>
      </div>
      <div
        className={`flex justify-center space-x-4 md:space-x-6 mt-3 md:mt-6 sm:text-xl lg:text-2xl xl:text-3xl ${luckiestGuy.className}`}
      >
        <Link
          href={
            "https://arbiscan.io/tx/0xf65a8a2ba0bd81d4038ee1a112979027c18ef092e6e1279738528eb49a64dd7f"
          }
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all underline"
        >
          TOOB/USDC
        </Link>
        <Link
          href={
            "https://arbiscan.io/tx/0x96456b4a0eea4c39b479f122856bebc18a747073f741e2e278513889b9655af5"
          }
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all underline"
        >
          TOOB/ARB
        </Link>
        <Link
          href={
            "https://arbiscan.io/tx/0xf65a8a2ba0bd81d4038ee1a112979027c18ef092e6e1279738528eb49a64dd7f"
          }
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all underline"
        >
          TOOB/ETH
        </Link>
      </div>
    </div>
  )
}

export default Tokenomics
