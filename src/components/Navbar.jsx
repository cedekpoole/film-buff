import Icon from "../assets/movie-buff.svg";
import IconSmall from "../assets/icon-small.svg";
import PropTypes from "prop-types";

Navbar.propTypes = {
  movies: PropTypes.array,
  setTitle: PropTypes.func,
};

export default function Navbar({ movies, setTitle }) {
  // handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") setTitle(e.target.value.trim());
  };

  return (
    <nav className="bg-slate-900 p-2 fixed top-0 w-full z-50 shadow-md">
      {" "}
      {/* Fixed Navbar */}
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
          onKeyDown={handleKeyPress}
        />
        <p className="text-gray-100 text-sm md:text-xl font-thin">
          Found <span className="font-bold text-gray-500">{movies.length}</span>{" "}
          Results
        </p>
      </div>
    </nav>
  );
}
