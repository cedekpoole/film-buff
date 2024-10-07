export default function WatchedCard({ watchedMovie }) {
  return (
    <div className="bg-slate-900 shadow-md rounded-md p-4 flex gap-2">
      <img
        src={watchedMovie.Poster}
        alt={watchedMovie.Title}
        className="w-1/4 rounded-md"
      />
      <div className="">
        <h2 className="text-lg font-bold mt-2">{watchedMovie.Title}</h2>
        <p className="text-gray-300">{watchedMovie.Year}</p>
        <p className="text-gray-300">IMDB Rating: {watchedMovie.imdbRating}</p>
        <p className="text-gray-300">Runtime: {watchedMovie.runtime} minutes</p>
        <p className="text-gray-300">User Rating: {watchedMovie.userRating}</p>
      </div>
    </div>
  );
}
