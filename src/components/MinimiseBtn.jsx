export default function MinimiseBtn({ isOpen, setIsOpen }) {
  return (
    <button
      className="text-3xl px-1 rounded-full bg-slate-800 hover:bg-slate-700"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? `-` : `+`}
    </button>
  );
}
