import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export const useMovies = (title) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // AbortController allows us to cancel fetch requests when the component re-renders or unmounts
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`,
          signal
        );
        if (!res.ok) throw new Error("Could not retrieve movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error(data.Error);

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (title) {
      fetchMovies();
    }

    return function () {
      controller.abort();
    };
  }, [title]);

  return { isLoading, error, movies };
};
