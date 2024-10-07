import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      <div className="mx-auto flex flex-col">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}
