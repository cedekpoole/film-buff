import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";
import MovieDetails from "./components/MovieDetails";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  function handleSelectedID(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseDetails() {
    setSelectedID(null);
  }

  function handleAddToWatched(movie) {
    handleCloseDetails();
    setWatched((watched) => [...watched, movie]);
  }

  // useEffect allows us to safely write side effects (like data fetching)
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
        );
        if (!res.ok) throw new Error("Could not retrieve movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error(data.Error);

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
            error={error}
            onSelectedID={handleSelectedID}
          />
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseDetails={handleCloseDetails}
              onAddToWatched={handleAddToWatched}
              watched={watched}
            />
          ) : (
            <MovieListContainer
              title="Movies Watched"
              movies={watched}
              extraProps={{ isWatched: true }}
              renderAverage={(items) => <MovieAverages watched={items} />}
            />
          )}
        </main>
      </div>
    </>
  );
}
