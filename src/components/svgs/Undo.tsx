interface UndoProps {
  className?: string
}

const Undo: React.FC<UndoProps> = ({ className }) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M8.00173 4.23333C8.72673 4.01667 9.52673 3.875 10.4101 3.875C14.4017 3.875 17.6351 7.10833 17.6351 11.1C17.6351 15.0917 14.4017 18.325 10.4101 18.325C6.41839 18.325 3.18506 15.0917 3.18506 11.1C3.18506 9.61667 3.63506 8.23333 4.40173 7.08333"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.96826 4.43317L9.37659 1.6665"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.96826 4.43311L9.7766 6.48311"
      stroke="#0F172A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Undo
