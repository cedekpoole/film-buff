import { useState } from "react";
import MinimiseBtn from "./MinimiseBtn";
import Collapse from "./Collapse";
import FilmCard from "./FilmCard";

export default function MovieListContainer({
  title,
  movies,
  extraProps,
  renderAverage,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
      {/* Render Movie Averages if provided */}
      {renderAverage && renderAverage(movies)}

      <div className="flex justify-between items-center">
        <h2 className="font-oswald text-2xl p-4 pb-2">{title}</h2>
        <MinimiseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Collapse isOpen={isOpen}>
        {movies.map((movie) => (
          <FilmCard key={movie.imdbID} movie={movie} {...extraProps} />
        ))}
      </Collapse>
    </div>
  );
}
