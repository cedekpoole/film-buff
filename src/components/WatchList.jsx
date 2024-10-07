import MovieAverages from "./MovieAverages";

export default function WatchList({ watched }) {
  return (
    <>
      <div className="bg-slate-900 mx-auto flex flex-col rounded">
        <MovieAverages watched={watched} />
      </div>
    </>
  );
}
