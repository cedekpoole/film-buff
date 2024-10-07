import Icon from "../assets/movie-buff.svg";
import IconSmall from "../assets/icon-small.svg";

export default function Navbar({ movies }) {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img
            src={Icon}
            alt="Movie Buff Logo"
            className="w-28 hidden md:block"
          />
          <img
            src={IconSmall}
            alt="Movie Buff Logo"
            className="w-16 block md:hidden"
          />
        </div>
        <input
          type="text"
          placeholder="Search for movies..."
          className="p-2 w-1/2 md:w-1/3 bg-gray-100 text-gray-700 rounded-md"
        />
        <p className="text-gray-100 text-sm md:text-xl font-thin">
          Found <span className="font-bold text-gray-500">{movies.length}</span>{" "}
          Results
        </p>
      </div>
    </nav>
  );
}
