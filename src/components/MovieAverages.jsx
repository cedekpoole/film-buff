import { useState } from "react";
import Collapse from "./Collapse";
import MinimiseBtn from "./MinimiseBtn";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function MovieAverages({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  const averageRating = average(watched.map((movie) => movie.imdbRating));
  const averageRuntime = average(watched.map((movie) => movie.runtime));
  const averageUserRating = average(watched.map((movie) => movie.userRating));

  return (
    <div className="p-4 bg-slate-800 shadow-lg rounded-md flex flex-col mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold font-oswald">Movie Averages</h2>
        <MinimiseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Collapse isOpen={isOpen}>
        <div className="flex flex-wrap gap-2">
          <p className="text-gray-300">
            Films Watched: <span className="font-bold">{watched.length}</span>
          </p>
          <p className="text-gray-300">
            IMDB Rating:{" "}
            <span className="font-bold">{averageRating.toFixed(1)}</span>
          </p>
          <p className="text-gray-300">
            Runtime:{" "}
            <span className="font-bold">{averageRuntime.toFixed(0)} </span>
            minutes
          </p>
          <p className="text-gray-300">
            User Rating:{" "}
            <span className="font-bold">{averageUserRating.toFixed(1)} </span>
          </p>
        </div>
      </Collapse>
    </div>
  );
}
