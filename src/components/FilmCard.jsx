export default function FilmCard({ movie, isWatched }) {
  return (
    <div className="bg-slate-800 shadow-md rounded-md p-4 flex gap-2 hover:bg-slate-700 cursor-pointer">
      <img src={movie.Poster} alt={movie.Title} className="w-1/6 rounded-md" />
      <div className="">
        <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
        <p className="text-gray-300">{movie.Year}</p>
        {isWatched && (
          <>
            <p className="text-gray-300">IMDB Rating: {movie.imdbRating}</p>
            <p className="text-gray-300">Runtime: {movie.runtime} minutes</p>
            <p className="text-gray-300">User Rating: {movie.userRating}</p>
          </>
        )}
      </div>
    </div>
  );
}
