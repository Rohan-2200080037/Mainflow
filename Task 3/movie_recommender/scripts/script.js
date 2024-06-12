// Sample movie data (replace with actual movie data)
const movies = [
    { title: "RRR", genre: "Action", rating: 4.8},
    { title: "F3", genre: "Comedy", rating: 3.5 },
    { title: "Hanuman", genre: "Drama", rating: 4.2 },
    { title: "Legend", genre: "Action", rating: 4.2 },
    // Add more movie objects as needed
];

// Function to display movies
function displayMovies(movieList) {
    const movieListContainer = document.getElementById("movieList");
    movieListContainer.innerHTML = "";

    movieList.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");

        const movieImage = document.createElement("img");
        movieImage.src = "../images/sample.png"; // Replace with actual movie image URL
        movieImage.alt = movie.title;

        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;

        const movieGenre = document.createElement("p");
        movieGenre.textContent = "Genre: " + movie.genre;

        const movieRating = document.createElement("p");
        movieRating.textContent = "Rating: " + movie.rating;

        movieItem.appendChild(movieImage);
        movieItem.appendChild(movieTitle);
        movieItem.appendChild(movieGenre);
        movieItem.appendChild(movieRating);

        movieListContainer.appendChild(movieItem);
    });
}

// Function to filter movies by genre
function filterMoviesByGenre(genre) {
    if (genre === "all") {
        return movies;
    } else {
        return movies.filter(movie => movie.genre === genre);
    }
}

// Function to sort movies by title or rating
function sortMoviesBy(sortBy) {
    if (sortBy === "title") {
        return movies.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "rating") {
        return movies.slice().sort((a, b) => b.rating - a.rating);
    }
}

// Function to handle search
function searchMovies() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    displayMovies(filteredMovies);
}

// Event listeners for filtering and sorting
document.getElementById("genreSelect").addEventListener("change", function() {
    const selectedGenre = this.value;
    const filteredMovies = filterMoviesByGenre(selectedGenre);
    displayMovies(filteredMovies);
});

document.getElementById("sortSelect").addEventListener("change", function() {
    const selectedSortBy = this.value;
    const sortedMovies = sortMoviesBy(selectedSortBy);
    displayMovies(sortedMovies);
});

// Display all movies initially
displayMovies(movies);
