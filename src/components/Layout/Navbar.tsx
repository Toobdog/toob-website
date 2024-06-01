import Image from "next/image"
import Close from "../svgs/Close"
import Logo from "@/assets/logo-full.png"
import Link from "next/link"
import { Luckiest_Guy } from "next/font/google"
import { Link as ScrollLink } from "react-scroll"
import Social from "../svgs/Social"
import Tiktok from "../svgs/Tiktok"
import Telegram from "../svgs/Telegram"
import X from "../svgs/X"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

interface NavbarProps {
  open: boolean
  setOpen: any
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ open, setOpen, className }) => {
  return (
    <div
      data-open={open}
      className={`fixed flex flex-col items-center top-0 right-0 w-[260px] sm:w-[464px] bg-black z-20 pb-[60px] rounded-es-[30px] data-[open=false]:translate-x-full transition-all ${
        className ?? ""
      }`}
    >
      <button className="absolute top-4 right-5" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="w-[130px] my-3"
      />
      <Link
        href={
          "https://app.uniswap.org/explore/tokens/arbitrum/0x676f7ed2d4829460f73468b36be49e0d6505107f?chain=arbitrum"
        }
        target="_blank"
        rel="noreferrer"
        className={`text-xs sm:text-xl text-black py-3 sm:py-3.5 px-7 mt-8 rounded-full bg-[linear-gradient(90deg,#E5A301_0%,#FFF500_101.5%)] hover:brightness-90 transition-all ${luckiestGuy.className}`}
      >
        BUY TOOB
      </Link>
      <ScrollLink
        to="about"
        smooth
        offset={-60}
        className="text-lg sm:text-xl mt-4 sm:mt-11"
        onClick={() => setOpen(false)}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="token"
        smooth
        offset={-60}
        className="text-lg sm:text-xl mt-3"
        onClick={() => setOpen(false)}
      >
        Tokenomics
      </ScrollLink>
      <ScrollLink
        to="toob-it"
        smooth
        offset={-60}
        className="text-lg sm:text-xl mt-3"
        onClick={() => setOpen(false)}
      >
        TOOB IT
      </ScrollLink>
      <ScrollLink
        to="chat"
        smooth
        offset={-60}
        className="text-lg sm:text-xl mt-3"
        onClick={() => setOpen(false)}
      >
        TOOB CHAT
      </ScrollLink>
      <ScrollLink
        to="faq"
        smooth
        offset={-60}
        className="text-lg sm:text-xl mt-3"
        onClick={() => setOpen(false)}
      >
        FAQ
      </ScrollLink>
      <div className="flex items-center mt-[66px] sm:mt-36 space-x-3 sm:space-x-[18px]">
        <Link
          href={"https://x.com/thetoobdog?s=21&t=QYd3sdnmj6S0oEl_tQzGqg"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all"
        >
          <X className="max-sm:w-[18px]" />
        </Link>
        <Link
          href={"https://t.me/tooobdog"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all"
        >
          <Telegram className="max-sm:w-[18px]" />
        </Link>
        <Link
          href={"https://www.tiktok.com/@the.toob.dog?_t=8lxQUIUnVvb&_r=1"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all"
        >
          <Tiktok className="max-sm:w-[18px]" />
        </Link>
        <Link
          href={"https://sanko.tv/thetoobdog"}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 transition-all"
        >
          <Social className="max-sm:w-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
