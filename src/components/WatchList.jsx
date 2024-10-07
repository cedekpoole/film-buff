import MovieAverages from "./MovieAverages";
import WatchedCard from "./WatchedCard";

export default function WatchList({ watched }) {
  return (
    <>
      <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
        <MovieAverages watched={watched} />
        <div className="flex flex-col">
          <h2 className="font-oswald text-2xl p-4 pb-2">Movies Watched</h2>
          <div>
            {watched.map((watchedMovie) => (
              <WatchedCard
                key={watchedMovie.imdbID}
                watchedMovie={watchedMovie}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
