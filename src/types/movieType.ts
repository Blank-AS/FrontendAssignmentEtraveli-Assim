export interface Movie {
  episode_id: number;
  title: string;
  release_date: string;
  url: string;
}

export interface MovieDetails extends Movie {
  opening_crawl: string;
  created: string;
  director: string;
  producer: string;
}