import Minus from "./svgs/Minus"
import Plus from "./svgs/Plus"

interface FAQItemProps {
  title: string
  content: React.ReactNode
  open: boolean
  onClick: any
  className?: string
}

const FAQItem: React.FC<FAQItemProps> = ({
  title,
  content,
  open,
  onClick,
  className,
}) => {
  return (
    <div
      className={`w-full border-t last:border-b border-white/20 cursor-pointer ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <div
        data-open={open}
        className="flex items-center justify-between data-[open=true]:text-[#FB6468] transition-all pt-[18px] lg:pt-6 pb-[18px] lg:pb-6 lg:data-[open=true]:pb-3 data-[open=true]:pb-4"
      >
        <span className="text-xs lg:text-2xl pl-2">{title}</span>
        {open ? (
          <Minus className="max-lg:w-[18px]" />
        ) : (
          <Plus className="max-lg:w-[18px]" />
        )}
      </div>
      <div
        data-open={open}
        className="overflow-hidden max-h-0 data-[open=true]:max-h-[300px] transition-all"
      >
        <div className="px-2.5 text-xs lg:text-lg leading-[30px] capitalize pb-6 lg:pb-14">
          {content}
        </div>
      </div>
    </div>
  )
}

export default FAQItem
