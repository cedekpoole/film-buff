import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

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
          />
        </main>
      </div>
    </>
  );
}
