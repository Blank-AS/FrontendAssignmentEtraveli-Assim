import { Movie } from "../types/movieType";


const sortedAndFilteredMovies = (
  movies: Movie[],
  sortType: string,
  searchQuery: string
): Movie[] => {
  // Filter the movies according to the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered/or-not movies according to the sort type
  const sortedMovies = filteredMovies.sort((a, b) => {
    switch (sortType) {
      case "episode_id_asc":
        return a.episode_id - b.episode_id;
      case "episode_id_desc":
        return b.episode_id - a.episode_id;
      case "title_asc":
        return a.title.localeCompare(b.title);
      case "title_desc":
        return b.title.localeCompare(a.title);
      case "release_date_asc":
        return (
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
        );
      case "release_date_desc":
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      case "rating_asc":
        return a.averageRating - b.averageRating;
      case "rating_desc":
        return b.averageRating - a.averageRating;
      default:
        return 0;
    }
  });

  return sortedMovies;
};

export default sortedAndFilteredMovies;