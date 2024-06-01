interface PlusProps {
  className?: string
}

const Plus: React.FC<PlusProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z"
      fill="currentColor"
    />
    <path
      d="M4.1875 11H19.9375C20.0625 11 20.125 11.0625 20.125 11.1875V12.5938C20.125 12.7188 20.0625 12.7812 19.9375 12.7812H4.1875C4.0625 12.7812 4 12.7188 4 12.5938V11.1875C4 11.0625 4.0625 11 4.1875 11Z"
      fill="currentColor"
    />
  </svg>
)

export default Plus
