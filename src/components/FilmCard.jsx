import PropTypes from "prop-types";

FilmCard.propTypes = {
  movie: PropTypes.object,
  isWatched: PropTypes.bool,
};

export default function FilmCard({ movie, isWatched, onSelectedID }) {
  const { imdbID, Title, Poster, Year, imdbRating, runtime, userRating } =
    movie;
  return (
    <div
      className="bg-slate-800 shadow-md rounded-md p-4 flex gap-3 hover:bg-slate-700 cursor-pointer min-h-40"
      onClick={() => onSelectedID(imdbID)}
    >
      <img src={Poster} alt={Title} className="w-24 rounded-md" />
      <div className="">
        <h2 className="text-lg font-bold mt-2">{Title}</h2>
        <p className="text-gray-300">{Year}</p>
        {isWatched && (
          <>
            <p className="text-gray-300">IMDB Rating: {imdbRating}</p>
            <p className="text-gray-300">Runtime: {runtime} minutes</p>
            <p className="text-gray-300">User Rating: {userRating}</p>
          </>
        )}
      </div>
    </div>
  );
}
