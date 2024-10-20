import { useEffect, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import Navbar from "./components/Navbar";
import MovieAverages from "./components/MovieAverages";
import MovieListContainer from "./components/ListContainer";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  // const [watched, setWatched] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const { isLoading, error, movies } = useMovies(title);
  const [watched, setWatched] = useLocalStorageState([], "watched");

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

  function handleDelete(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    if (title) handleCloseDetails();
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
              onDelete={handleDelete}
            />
          )}
        </main>
      </div>
    </>
  );
}
