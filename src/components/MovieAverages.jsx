import { useState } from "react";
import Collapse from "./Collapse";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function MovieAverages({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  const averageRating = average(watched.map((movie) => movie.imdbRating));
  const averageRuntime = average(watched.map((movie) => movie.runtime));
  const averageUserRating = average(watched.map((movie) => movie.userRating));

  return (
    <div
      className={`${
        isOpen ? `p-4` : `p-2`
      } bg-slate-800 shadow-lg rounded-md flex flex-col`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`${
            isOpen ? `text-lg font-bold mb-2` : `text-md font-normal`
          } font-oswald`}
        >
          Averages
        </h2>

        <button
          className="text-3xl px-1 rounded-full bg-slate-800 hover:bg-slate-700"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? `-` : `+`}
        </button>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="flex flex-wrap gap-2">
          <p>Films Watched: {watched.length}</p>
          <p className="text-gray-300">
            IMDB Rating: {averageRating.toFixed(1)}
          </p>
          <p className="text-gray-300">
            Runtime: {averageRuntime.toFixed(0)} minutes
          </p>
          <p className="text-gray-300">
            User Rating: {averageUserRating.toFixed(1)}
          </p>
        </div>
      </Collapse>
    </div>
  );
}
