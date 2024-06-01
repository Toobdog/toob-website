import Image from "next/image"

import Arb from "@/assets/arbitrum.png"

interface ArbEyeSwitchProps {
  open: boolean
  setOpen: any
  className?: string
}

const ArbEyeSwitch: React.FC<ArbEyeSwitchProps> = ({
  open,
  setOpen,
  className,
}) => {
  return (
    <div
      data-open={open}
      className="relative w-14 base:w-20 h-7 base:h-10 bg-black/20 data-[open=true]:bg-black/10 transition-all rounded-full cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <Image
        src={Arb.src}
        width={Arb.width}
        height={Arb.height}
        alt="arb"
        data-open={open}
        className="absolute top-0 left-0 w-7 base:w-10 h-7 base:h-10 p-0.5 data-[open=true]:left-7 base:data-[open=true]:left-10 transition-all data-[open=false]:grayscale"
      />
    </div>
  )
}

export default ArbEyeSwitch
