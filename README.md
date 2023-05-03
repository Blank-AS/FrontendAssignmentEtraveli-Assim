
## Star Wars Movie Guide

This project is a web application that allows users to explore the Star Wars movie franchise by displaying a list of movies, their details, and sorting/searching capabilities. The website have a custom light saber modern theme and is fully responsive, providing a seamless experience on phones, tablets, and desktop devices.


### Features:

- Display a list of Star Wars movies.
- Fully responsive design for phones, tablets, and desktop devices.
- Sort movies by episode number, title, release date, or rating.
- Search movies by their title.
- View detailed information about each movie, including plot, genre, producer, director, main actors, awards, box office, and duration.
- Ratings from IMDb, Rotten Tomatoes, and Metacritic are displayed.
- Light and dark mode support.
- React (typescript), Redux for state management, Jest for robustness, and Emotion for styling.


### Main Components

- MoviesList: Displays the list of Star Wars movies with their episode number, title, rating, and release date. Users can select a movie to view its details.
- SortAndSearch: Provides the sort and search functionality, allowing users to filter and order the list of movies.
- MovieDetails: Displays detailed information about the selected movie, including plot, genre, producer, director, main actors, awards, box office, and duration, as well as ratings from IMDb, Rotten Tomatoes, and Metacritic.
- App: The main container component, combining MoviesList, MovieDetails, and SortAndSearch components.


### File Structure

- src/components: Contains the main components: MoviesList, SortAndSearch, and MovieDetails.
- src/hooks: Contains custom hooks.
- src/redux: Contains Redux-related folders/files, such as store, actions, and reducers.
- src/styles: Contains Emotion styles for components and shared styles.
- src/types: Contains TypeScript type definitions.
- src/utils: Contains utility functions.
- src/tests: Contains tests for the project.
- src/assets: Contains icons used within the application.
- src/services: Contains the API configurations and endpoints.


### Getting Started

To get started with the project, follow these steps:

- Clone the repository.
- Install the required dependencies by running `npm install`.
- Start the development server by running `npm run dev`.
- To run the Jest test suite, execute `npm test`
