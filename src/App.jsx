import { useEffect, useState } from "react";
import { tempWatchedData } from "./data";
import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";
import StarRating from "./components/StarRating";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [movieRating, setMovieRating] = useState(0);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const movieTitle = "interstellar";

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-gray-100 font-quattrocento pt-20">
        <Navbar movies={movies} />
        <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-2">
          <MovieListContainer title="Results" movies={movies} />
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
