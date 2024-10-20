import { useState } from "react";
import MinimiseBtn from "./UI/MinimiseBtn";
import Collapse from "./UI/Collapse";
import FilmCard from "./FilmCard";
import PropTypes from "prop-types";
import Loader from "./UI/Loader";
import ErrorMsg from "./UI/ErrorMsg";

MovieListContainer.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  extraProps: PropTypes.object,
  renderAverage: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default function MovieListContainer({
  title,
  movies,
  extraProps,
  renderAverage,
  isLoading,
  error,
  onSelectedID,
  onDelete,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-slate-900 mx-auto flex flex-col rounded p-4 w-full lg:w-1/2">
      {/* Render Movie Averages if provided */}
      {renderAverage && renderAverage(movies)}
      <div className="flex justify-between items-center">
        <h2 className="font-oswald text-2xl pb-2">{title}</h2>
        <MinimiseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Collapse isOpen={isOpen}>
        {isLoading && <Loader />}
        {!isLoading &&
          !error &&
          movies.map((movie) => (
            <FilmCard
              key={movie.imdbID}
              movie={movie}
              onSelectedID={onSelectedID}
              onDelete={onDelete}
              {...extraProps}
            />
          ))}
        {error && <ErrorMsg message={error} />}
      </Collapse>
    </div>
  );
}
