// Desc: Display average ratings, runtime, and user ratings for all movies watched
const average = (arr) =>
  arr.length > 0
    ? arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)
    : 0;

export default function MovieAverages({ watched }) {
  const averageRating = average(watched.map((movie) => movie.imdbRating || 0));
  const averageRuntime = average(watched.map((movie) => movie.runtime || 0));
  const averageUserRating = average(
    watched.map((movie) => movie.userRating || 0)
  );

  return (
    <div className="p-4 bg-slate-800 shadow-lg rounded-md flex flex-col mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold font-oswald">Movie Averages</h2>
        <div></div>
      </div>
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
    </div>
  );
}
