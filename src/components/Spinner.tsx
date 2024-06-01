interface SpinnerProps {
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <g className="origin-center animate-[rotate_0.75s_step-end_infinite]">
      <circle cx="12" cy="2.5" r="2" opacity=".14" fill="currentColor" />
      <circle cx="16.75" cy="3.77" r="2" opacity=".29" fill="currentColor" />
      <circle cx="20.23" cy="7.25" r="2" opacity=".43" fill="currentColor" />
      <circle cx="21.50" cy="12.00" r="2" opacity=".57" fill="currentColor" />
      <circle cx="20.23" cy="16.75" r="2" opacity=".71" fill="currentColor" />
      <circle cx="16.75" cy="20.23" r="2" opacity=".86" fill="currentColor" />
      <circle cx="12" cy="21.5" r="2" fill="currentColor" />
    </g>
  </svg>
)

export default Spinner
