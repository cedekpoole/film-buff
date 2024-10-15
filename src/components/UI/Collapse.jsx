export default function Collapse({ children, isOpen }) {
  return (
    <div
      className={`flex gap-2 flex-col transition-all duration-500 ease-in-out overflow-y-auto ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}
