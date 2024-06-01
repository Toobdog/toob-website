import Image from "next/image"
import Ship from "@/assets/ship.png"
import { Luckiest_Guy } from "next/font/google"
import ArrowLeft from "./svgs/ArrowLeft"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const Mission = () => {
  return (
    <div className="flex max-md:flex-col items-center md:bg-black/20 pt-3 pb-8">
      <div className="w-1/2 flex flex-col items-center max-md:mt-[60px]">
        <div className="flex items-center">
          <ArrowLeft className="text-[#FFF500] rotate-180 max-lg:w-[22px] max-lg:h-[24px]" />
          <span className={`text-xl lg:text-4xl ml-2 ${luckiestGuy.className}`}>
            OUR Mission
          </span>
        </div>
        <p className="text-xs lg:text-xl text-center mt-2 max-w-[610px] uppercase">
          Simple and complicated mission: onboarding the masses to Arbitrum in
          an easy and very toob way.
          <br />
          Focusing on non crypto users (normies).
        </p>
      </div>
      <div className="w-1/2 flex justify-center max-md:mt-[60px]">
        <Image
          src={Ship.src}
          width={Ship.width}
          height={Ship.height}
          alt="ship"
          className="max-md:w-[220px] max-lg:w-[240px] max-xl:w-[360px]"
        />
      </div>
    </div>
  )
}

export default Mission
