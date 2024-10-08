import { useState } from "react";
import MovieAverages from "./MovieAverages";
import FilmCard from "./FilmCard";
import MinimiseBtn from "./MinimiseBtn";
import Collapse from "./Collapse";
import StarRating from "./StarRating";

export default function WatchList({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
        <MovieAverages watched={watched} />
        <div className="flex justify-between items-center">
          <h2 className="font-oswald text-2xl p-4 pb-2">Movies Watched</h2>
          <MinimiseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <Collapse isOpen={isOpen}>
          {watched.map((watchedMovie) => (
            <FilmCard
              key={watchedMovie.imdbID}
              movie={watchedMovie}
              isWatched={true}
            />
          ))}
          <StarRating maxRating={10} />
        </Collapse>
      </div>
    </>
  );
}
