interface HambugerProps {
  className?: string
}

const Hambuger: React.FC<HambugerProps> = ({ className }) => (
  <svg
    width="57"
    height="57"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M9.5 41.0163V38.6413H47.5V41.0163H9.5ZM9.5 29.6875V27.3125H47.5V29.6875H9.5ZM9.5 18.3588V15.9838H47.5V18.3588H9.5Z"
      fill="white"
    />
  </svg>
)

export default Hambuger
