import MovieAverages from "./MovieAverages";
import WatchedCard from "./WatchedCard";

export default function WatchList({ watched }) {
  return (
    <>
      <div className="bg-slate-900 mx-auto flex flex-col rounded p-4">
        <MovieAverages watched={watched} />
        <div className="flex flex-col">
          {watched.map((watchedMovie) => (
            <WatchedCard
              key={watchedMovie.imdbID}
              watchedMovie={watchedMovie}
            />
          ))}
        </div>
      </div>
    </>
  );
}
