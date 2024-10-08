import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-gray-100 font-quattrocento">
        <Navbar movies={movies} />
        <main className="container mx-auto p-4 flex flex-col md:flex-row gap-2">
          <MovieList movies={movies} />
          <WatchList watched={watched} />
        </main>
      </div>
    </>
  );
}
