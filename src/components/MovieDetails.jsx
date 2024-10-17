import { useEffect } from "react";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails({ selectedID, onCloseDetails }) {
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedID}`
        );
        if (!res.ok) throw new Error("Could not retrieve movie details");

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    getMovieDetails();
  }, [selectedID]);

  return (
    <div className="bg-slate-900 mx-auto flex justify-between items-start rounded p-4 w-full lg:w-1/2">
      <h3 className="text-xl">Selected Movie ID: {selectedID}</h3>
      <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={onCloseDetails}
      >
        Close Details
      </button>
    </div>
  );
}
