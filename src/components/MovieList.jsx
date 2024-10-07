import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="mx-auto flex flex-col rounded bg-slate-900 p-4 gap-2 w-full lg:w-1/2 min-h-[300px]">
        <div className="flex justify-between items-center">
          <h2 className="font-oswald text-2xl">Results</h2>
          <button
            className="text-3xl px-1 rounded-full bg-slate-800 hover:bg-slate-700"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? `-` : `+`}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
