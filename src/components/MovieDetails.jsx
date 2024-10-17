export default function MovieDetails({ selectedID }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl">Selected Movie ID: {selectedID}</h1>
    </div>
  );
}
