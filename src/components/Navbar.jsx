import Icon from "../assets/movie-buff.svg";
import IconSmall from "../assets/icon-small.svg";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

Navbar.propTypes = {
  movies: PropTypes.array,
  setTitle: PropTypes.func,
};

export default function Navbar({ movies, setTitle }) {
  const inputEl = useRef(null);

  // handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") setTitle(e.target.value.trim());
  };

  useEffect(() => {
    function callback(e) {
      if (e.code === "Enter") {
        inputEl.current.focus();
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, []);

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
          className="p-2 w-1/2 md:w-1/3 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
          onKeyDown={handleKeyPress}
          ref={inputEl}
        />
        <p className="text-gray-100 text-sm md:text-xl font-thin">
          Found <span className="font-bold text-gray-500">{movies.length}</span>{" "}
          Results
        </p>
      </div>
    </nav>
  );
}
