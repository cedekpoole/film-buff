import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      <div className="mx-auto flex flex-col rounded bg-slate-900 p-4 gap-2">
        <h2 className="font-oswald text-2xl">Results</h2>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}
