import Image from "next/image"
import Line from "@/assets/line.png"

const Divider = () => {
  return (
    <Image
      src={Line.src}
      width={Line.width}
      height={Line.height}
      alt="line"
      className="w-full"
    />
  )
}

export default Divider
