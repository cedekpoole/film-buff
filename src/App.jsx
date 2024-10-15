import { useEffect, useState } from "react";
import { tempWatchedData } from "./data";
import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";
import StarRating from "./components/StarRating";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [movieRating, setMovieRating] = useState(0);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect allows us to safely write side effects (like data fetching)
  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
      );
      const data = await res.json();
      if (data.Search) setMovies(data.Search);
      setIsLoading(false);
    }
    if (title) {
      fetchMovies();
    }
  }, [title]);

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-gray-100 font-quattrocento pt-20">
        <Navbar movies={movies} setTitle={setTitle} />
        <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-2">
          <MovieListContainer
            title="Results"
            movies={movies}
            isLoading={isLoading}
          />
          <MovieListContainer
            title="Movies Watched"
            movies={watched}
            extraProps={{ isWatched: true }}
            renderAverage={(items) => <MovieAverages watched={items} />}
            renderStarAverage={() => (
              <>
                <StarRating
                  maxRating={10}
                  gap={5}
                  size={50}
                  className={`font-light`}
                  onSetRating={setMovieRating}
                />
                <p className="text-center text-gray-300">
                  Your rating: {movieRating}{" "}
                </p>
              </>
            )}
          />
        </main>
      </div>
    </>
  );
}
