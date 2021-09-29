import React from 'react';

import Movie from '@components/Movie';

import styles from './Movies.module.scss';

type MovieType = Partial<{
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_name: string;
  original_title: string;
}>;

export interface MoviesProps {
  movies?: MovieType[];
  getPosterUrl: (movie: MovieType) => string;
}

const Movies: React.FC<MoviesProps> = ({
  movies = [],
  getPosterUrl,
}: MoviesProps) => {
  return (
    <div className={styles.root}>
      {movies.map((movie, i) => {
        return (
          <Movie
            key={i}
            name={movie.title || movie.original_title || movie.original_name}
            description={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            withDivider={movies.length - 1 !== i}
            getPosterUrl={() => getPosterUrl(movie)}
          />
        );
      })}
    </div>
  );
};

export default Movies;
