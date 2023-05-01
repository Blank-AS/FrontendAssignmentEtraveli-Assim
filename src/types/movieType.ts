export interface Movie {
  episode_id: number;
  title: string;
  release_date: string;
  url: string;
  opening_crawl: string;
  director: string;
  producer: string;
  extraDetails: ExtraDetails;
  imdbRating: number;
  rottenTomatoesRating: number;
  metacriticRating: number;
  averageRating: number;
}

export interface ExtraDetails {
  Genre: string;
  Plot: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Runtime: string;
  Poster: string;
}
