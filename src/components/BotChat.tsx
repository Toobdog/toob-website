import Image from "next/image"
import Logo from "@/assets/logo.png"

interface BotChatProps {
  content: React.ReactNode
  className?: string
}

const BotChat: React.FC<BotChatProps> = ({ content, className }) => {
  return (
    <div
      className={`flex items-start border border-[#E4E6EC] rounded-[12px] p-3 md:p-6 last:border-0 last:border-l-[#5841D9] last:border-l-[3px] last:shadow-[0px_9px_30px_2px_rgba(88,65,217,0.04)] ${
        className ?? ""
      }`}
    >
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="w-10 max-md:w-[30px]"
      />
      <div className="text-[10px] md:text-xs lg:text-sm !leading-[28px] text-[#0F172A] ml-3 md:ml-5">
        {content}
      </div>
    </div>
  )
}

export default BotChat
