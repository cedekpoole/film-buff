export default function Collapse({ children, isOpen }) {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}
