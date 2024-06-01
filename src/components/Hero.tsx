import Image from "next/image"
import Welcome from "@/assets/welcome.png"

const Hero = () => {
  return (
    <div>
      <Image
        src={Welcome.src}
        width={Welcome.width}
        height={Welcome.height}
        alt="welcome"
        priority
        className="w-full"
      />
    </div>
  )
}

export default Hero
