import Image from "next/image"
import { Luckiest_Guy } from "next/font/google"
import Toob from "@/assets/toob1.png"
import Arb from "@/assets/arbitrum-full.png"
import ArrowLeft from "./svgs/ArrowLeft"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const About = () => {
  return (
    <div
      id="about"
      className="flex max-lg:flex-col items-center justify-center pt-[110px] pb-10"
    >
      <Image
        src={Toob.src}
        width={Toob.width}
        height={Toob.height}
        alt="toob"
        className="max-lg:mt-5 max-lg:w-[180px] max-xl:w-[360px] max-2xl:w-[450px] max-lg:hidden"
      />
      <Image
        src={Arb.src}
        width={Arb.width}
        height={Arb.height}
        alt="arb"
        className="mx-6 xl:mx-10 2xl:mx-14 max-md:w-[140px] max-lg:w-[160px] max-xl:w-[200px] max-2xl:w-[240px] max-lg:order-1"
      />
      <div className="flex flex-col items-center max-xl:max-w-[360px] max-2xl:max-w-[450px] max-w-[513px] max-lg:order-2 max-lg:mt-10">
        <div className="flex items-center">
          <ArrowLeft className="text-[#FFF500] rotate-180 max-lg:w-[19px] max-lg:h-[22px]" />
          <span
            className={`text-lg lg:text-3xl xl:text-4xl ml-2 ${luckiestGuy.className}`}
          >
            What&apos;s Toob Token?
          </span>
        </div>
        <p className="text-xs lg:text-xl text-center mt-2 uppercase">
          Toob Token? It&apos;s like your favorite meme dog got a crypto
          makeover. Picture memes meets crypto—pure chaos, pure fun. Strap in,
          let&apos;s meme to the moon!
        </p>
        <Image
          src={Toob.src}
          width={Toob.width}
          height={Toob.height}
          alt="toob"
          className="max-lg:mt-5 max-lg:w-[180px] max-xl:w-[360px] max-2xl:w-[450px] lg:hidden"
        />
        <div className="flex items-center mt-5 lg:mt-20">
          <ArrowLeft className="text-[#FFF500] rotate-180 max-lg:w-[19px] max-lg:h-[22px]" />
          <span
            className={`text-lg lg:text-3xl xl:text-4xl ml-2 ${luckiestGuy.className}`}
          >
            Why arbitrum one?
          </span>
        </div>
        <p className="text-xs lg:text-xl text-center mt-2 uppercase">
          The leading Ethereum Layer 2 by TVL, Activity, Security and Technology
          … need to elaborate more?
        </p>
      </div>
    </div>
  )
}

export default About
