import MovieAverages from "./MovieAverages";
import FilmCard from "./FilmCard ";

export default function WatchList({ watched }) {
  return (
    <>
      <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
        <MovieAverages watched={watched} />
        <h2 className="font-oswald text-2xl p-4 pb-2">Movies Watched</h2>
        <div>
          {watched.map((watchedMovie) => (
            <FilmCard
              key={watchedMovie.imdbID}
              watchedMovie={watchedMovie}
              isWatched={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}
