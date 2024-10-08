import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";
import StarRating from "./components/StarRating";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-gray-100 font-quattrocento">
        <Navbar movies={movies} />
        <main className="container mx-auto p-4 flex flex-col md:flex-row gap-2">
          <MovieListContainer title="Results" movies={movies} />
          <MovieListContainer
            title="Movies Watched"
            movies={watched}
            extraProps={{ isWatched: true }}
            renderAverage={(items) => <MovieAverages watched={items} />}
            renderStarAverage={() => (
              <div>
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
              </div>
            )}
          />
        </main>
      </div>
    </>
  );
}
