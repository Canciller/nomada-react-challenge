import React from 'react';

import Movie from '@components/Movie';

import styles from './Movies.module.scss';

type MovieType = Partial<{
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
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
      <div className={styles.content}>
        {movies.map((movie, i) => {
          return (
            <Movie
              key={i}
              name={`${movie.title}`}
              description={movie.overview}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              getPosterUrl={() => getPosterUrl(movie)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
