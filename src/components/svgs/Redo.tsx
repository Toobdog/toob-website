interface RedoProps {
  className?: string
}

const Redo: React.FC<RedoProps> = ({ className }) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M12.8184 4.23333C12.0934 4.01667 11.2934 3.875 10.4101 3.875C6.41839 3.875 3.18506 7.10833 3.18506 11.1C3.18506 15.1 6.41839 18.3333 10.4101 18.3333C14.4017 18.3333 17.6351 15.1 17.6351 11.1083C17.6351 9.625 17.1851 8.24167 16.4184 7.09167"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8517 4.43317L11.4434 1.6665"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8518 4.43311L11.0435 6.48311"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Redo
