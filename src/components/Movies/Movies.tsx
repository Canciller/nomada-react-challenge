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
  movies?: Record<string | number, MovieType>;
  getPosterUrl: (movie: MovieType) => string;
}

const Movies: React.FC<MoviesProps> = ({
  movies = {},
  getPosterUrl,
}: MoviesProps) => {
  const length = Object.keys(movies).length;

  return (
    <div className={styles.root}>
      {Object.keys(movies).map((key, i) => {
        const movie = movies[key];

        return (
          <Movie
            key={key}
            name={movie.title || movie.original_title || movie.original_name}
            description={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            withDivider={length - 1 !== i}
            getPosterUrl={() => getPosterUrl(movie)}
          />
        );
      })}
    </div>
  );
};

export default Movies;
