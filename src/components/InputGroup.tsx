interface InputGroupProps {
  type?: string
  title: string
  right: React.ReactNode
  dollar?: boolean
  value: string
  onChange: any
  placeholder: string
  disabled?: boolean
  sm?: boolean
  bottom?: boolean
  error?: string
  className?: string
}

const InputGroup: React.FC<InputGroupProps> = ({
  type,
  title,
  right,
  dollar,
  value,
  disabled,
  onChange,
  sm,
  error,
  bottom,
  placeholder,
  className,
}) => {
  return (
    <div className={`w-full ${className ?? ""}`}>
      <div className="text-xs sm:text-base xl:text-lg text-black leading-[30px]">
        {title}
      </div>
      <div className="relative w-full">
        {dollar ? (
          <span
            data-empty={value.length === 0}
            className="absolute left-[18px] xl:left-10 top-1/2 -translate-y-1/2 text-black sm:text-2xl xl:text-[32px] data-[empty=true]:text-[#E4E6EC]"
          >
            $
          </span>
        ) : null}
        <input
          type={type ?? "text"}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          data-left={dollar}
          data-small={sm}
          data-error={value.length > 0 && Boolean(error)}
          data-bottom={Boolean(bottom)}
          className="border-[6px] border-[#E4E6EC] w-full rounded-[12px] py-3.5 sm:py-[18px] xl:py-9 data-[small=true]:py-[18px] outline-none text-black sm:text-2xl xl:text-[32px] pl-2.5 sm:pl-[18px] xl:pl-10 data-[sm=true]:pl-[34px] data-[left=true]:pl-[22px] sm:data-[left=true]:pl-[26px] xl:data-[left=true]:pl-[52px] placeholder:text-[#E4E6EC] disabled:bg-transparent pr-[160px] xl:pr-[240px] [&::-webkit-inner-spin-button]:hidden max-sm:data-[bottom=true]:pb-12 max-sm:data-[bottom=true]:pr-2.5 data-[error=true]:border-red-200"
        />
        <div
          data-bottom={Boolean(bottom)}
          className="absolute max-sm:data-[bottom=true]:bottom-3 max-sm:data-[bottom=true]:left-0 max-sm:data-[bottom=true]:right-0 sm:top-0 data-[bottom=false]:top-0 bottom-0 right-6 my-auto flex items-center justify-center"
        >
          {right}
        </div>
      </div>
      {error && value.length > 0 ? (
        <div className="text-xs xl:text-lg text-red-500">{error}</div>
      ) : null}
    </div>
  )
}

export default InputGroup
