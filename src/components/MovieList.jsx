import { useState } from "react";
import FilmCard from "./FilmCard";
import Collapse from "./Collapse";
import MinimiseBtn from "./MinimiseBtn";

export default function MovieList({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="mx-auto flex flex-col rounded bg-slate-900 p-4 gap-2 w-full lg:w-1/2 min-h-[300px]">
        <div className="flex justify-between items-center">
          <h2 className="font-oswald text-2xl">Results</h2>
          <MinimiseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <Collapse isOpen={isOpen}>
          {movies.map((movie) => (
            <FilmCard key={movie.imdbID} movie={movie} />
          ))}
        </Collapse>
      </div>
    </>
  );
}
