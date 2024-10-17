import { useEffect, useState } from "react";
import ErrorMsg from "./UI/ErrorMsg";
import StarRating from "./UI/StarRating";
import Loader from "./UI/Loader";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails({
  selectedID,
  onCloseDetails,
  movieRating,
  setMovieRating,
  onAddToWatched,
}) {
  const [error, setError] = useState("");
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Director: director,
    Actors: actors,
    Released: released,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedID}`
        );
        if (!res.ok) throw new Error("Could not retrieve movie details");

        const data = await res.json();
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
          <h3 className="text-2xl font-oswald">{title}</h3>
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
            <img src={poster} alt={title} className="w-48 rounded-md" />
            <div>
              <p className="text-gray-300">
                <span className="font-bold">Released:</span> {released}
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
            <StarRating
              maxRating={10}
              gap={4}
              size={30}
              className={`font-light`}
              onSetRating={setMovieRating}
            />
            <p className="text-center text-gray-300 mt-2">
              Your rating: {movieRating}{" "}
            </p>
            <button
              className="bg-slate-800 text-white p-2 rounded-md mt-4 hover:bg-slate-700"
              onClick={() => onAddToWatched(movie)}
            >
              Add to Watched List
            </button>
            <div />
          </div>
        </>
      )}
    </div>
  );
}
