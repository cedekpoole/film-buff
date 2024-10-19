import { useEffect, useState } from "react";
import ErrorMsg from "./UI/ErrorMsg";
import StarRating from "./UI/StarRating";
import Loader from "./UI/Loader";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails({
  selectedID,
  onCloseDetails,
  onAddToWatched,
  watched,
}) {
  const [error, setError] = useState("");
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [movieRating, setMovieRating] = useState(0);

  const {
    Title,
    Poster,
    imdbRating,
    Year,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Director: director,
    Actors: actors,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
      userRating: movieRating,
    };
    onAddToWatched(newWatchedMovie);
  }

  const isWatched = watched.some((movie) => movie.imdbID === selectedID);

  const watchedMovieRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError("");
        setIsLoading(true);
        setMovieRating(0);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedID}`
        );
        if (!res.ok) throw new Error("Could not retrieve movie details");

        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedID) getMovieDetails();
  }, [selectedID]);

  return (
    <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
      <div className="flex justify-between items-center">
        {!error ? (
          <h3 className="text-2xl font-oswald">{Title}</h3>
        ) : (
          <ErrorMsg message={error} />
        )}
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={onCloseDetails}
        >
          Close Details
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex gap-4 mt-6">
            <img src={Poster} alt={Title} className="w-48 rounded-md" />
            <div>
              <p className="text-gray-300">
                <span className="font-bold">Released:</span> {Year}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Genre:</span> {genre}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Director:</span> {director}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Actors:</span> {actors}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Runtime:</span> {runtime}
              </p>
              <p className="text-gray-300">
                <span className="font-bold">IMDB Rating:</span> {imdbRating}
              </p>
            </div>
          </div>
          <p className="text-gray-300 bg-slate-800 p-4 my-4 rounded">{plot}</p>
          <div className="flex flex-col items-center">
            {!isWatched ? (
              <>
                <StarRating
                  maxRating={10}
                  gap={4}
                  size={30}
                  className={`font-light`}
                  onSetRating={setMovieRating}
                />

                {movieRating > 0 && (
                  <button
                    className="bg-slate-800 text-white p-2 rounded-md mt-4 hover:bg-slate-700"
                    onClick={() => handleAdd()}
                  >
                    Add to Watched List
                  </button>
                )}
              </>
            ) : (
              <p className="text-gray-300 bg-slate-800 p-4 my-4 rounded">
                Already Rated. Your rating:{" "}
                <span className="text-xl font-bold text-[#EFD54A]">
                  {watchedMovieRating}
                </span>
              </p>
            )}
            <div />
          </div>
        </>
      )}
    </div>
  );
}
