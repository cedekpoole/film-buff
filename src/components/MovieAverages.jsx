const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function MovieAverages({ watched }) {
  const averageRating = average(watched.map((movie) => movie.imdbRating));
  const averageRuntime = average(watched.map((movie) => movie.runtime));
  const averageUserRating = average(watched.map((movie) => movie.userRating));

  return (
    <div className="bg-slate-900 shadow-lg rounded-md p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-2 font-oswald">Averages</h2>
      <div className="flex flex-wrap gap-2">
        <p>Films Watched: {watched.length}</p>
        <p className="text-gray-300">IMDB Rating: {averageRating.toFixed(1)}</p>
        <p className="text-gray-300">
          Runtime: {averageRuntime.toFixed(0)} minutes
        </p>
        <p className="text-gray-300">
          User Rating: {averageUserRating.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
