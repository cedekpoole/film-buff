import Icon from "../assets/movie-buff.svg";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={Icon} alt="Movie Buff Logo" className="w-28" />
        <input
          type="text"
          placeholder="Search for movies..."
          className="p-2 w-1/3 rounded-md"
        />
        <p className="text-white text-xl font-thin">
          Found <span className="font-bold">X</span> Results
        </p>
      </div>
    </nav>
  );
}
