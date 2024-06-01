interface DottedSpinnerProps {
  className?: string
}

const DottedSpinner: React.FC<DottedSpinnerProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <circle
      className="animate-bounce"
      cx="4"
      cy="12"
      r="3"
      fill="currentColor"
    />
    <circle
      className="animate-bounce spinner_oXPr"
      cx="12"
      cy="12"
      r="3"
      style={{ animationDelay: "0.1s" }}
      fill="currentColor"
    />
    <circle
      className="animate-bounce spinner_ZTLf"
      cx="20"
      cy="12"
      r="3"
      style={{ animationDelay: "0.2s" }}
      fill="currentColor"
    />
  </svg>
)

export default DottedSpinner
