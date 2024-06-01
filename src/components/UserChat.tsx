import Image from "next/image"
import moment from "moment"
import User from "@/assets/user.png"

interface UserChatProps {
  date: Date
  content: React.ReactNode
  className?: string
}

const UserChat: React.FC<UserChatProps> = ({ content, date, className }) => {
  return (
    <div
      className={`flex items-start border border-[#E4E6EC] rounded-[12px] p-3 md:p-6 pt-1.5 md:pt-4 ${
        className ?? ""
      }`}
    >
      <Image
        src={User.src}
        width={User.width}
        height={User.height}
        alt="user"
        className="max-md:w-8"
      />
      <div className="flex flex-col mt-1.5 md:mt-2 ml-3 md:ml-[18px]">
        <span className="text-[#0F172A] max-md:text-xs max-lg:text-sm">User</span>
        <span className="text-[#64748B] text-[10px] lg:text-xs">
          {moment(date).format("MMM DD, YYYY  hh:mm A")}
        </span>
        <div className="text-[10px] md:text-xs lg:text-sm text-[#0F172A] mt-2.5 lg:mt-3 !leading-[28px]">
          {content}
        </div>
      </div>
    </div>
  )
}

export default UserChat
