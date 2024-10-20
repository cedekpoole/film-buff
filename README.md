# MovieBuff

**MovieBuff** is a web application that allows users to search for movies, view movie details, rate movies, and manage a personal watched list. It provides useful insights such as the total number of films watched, average IMDb rating, personal user ratings, and the total runtime of all watched movies.

## Features

- **Search Movies**: Search for movies using a search bar.
- **View Details**: See detailed information about each movie, including IMDb ratings and runtime.
- **Rate Movies**: Rate movies using a star rating component.
- **Watched List**: Add movies to your watched list.
- **Delete Movies**: Remove movies from the watched list.
- **Statistics**: Get averages on:
  - Number of films watched
  - Average IMDb rating
  - User's personal average rating
  - Total runtime of all watched movies

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **OMDb API**: Used to fetch movie details and IMDb ratings.

## Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/moviebuff.git
   ```

2. Navigate to the project directory:

   ```bash
    cd moviebuff
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
    VITE_OMDB_API_KEY=your_api_key
   ```

5. Start the development server:

   ```bash
    npm run dev
   ```

## Usage

1. Search for Movies: Enter the title of a movie in the search bar and click the search button.
2. View Movie Details: Click on a movie from the search results to view more detailed information.
3. Rate Movies: Use the star rating component to rate the movie.
4. Manage Watched List:

- Add a movie to your watched list by clicking the "Add to Watched" button.
- Remove a movie by clicking the delete icon in your watched list.

5. View Statistics: Check your dashboard to see aggregated statistics based on your watched list.

### Future Improvements

- User authentication for saving lists across sessions.
- Sorting and filtering options for the watched list.
- Recommendations based on user ratings.
