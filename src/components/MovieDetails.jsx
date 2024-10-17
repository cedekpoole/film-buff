export default function MovieDetails({ selectedID, onCloseDetails }) {
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
