import React from 'react';

import { Image } from 'antd';

import styles from './Movie.module.scss';

export interface MovieProps {
  name?: string;
  description?: string;
  releaseDate?: string;
  voteAverage?: number;
  getPosterUrl: () => string;
}

const Movie: React.FC<MovieProps> = ({
  getPosterUrl,
  name,
  description,
  releaseDate,
  voteAverage,
}: MovieProps) => {
  return (
    <div className={styles.root}>
      <Image
        style={{
          width: '12em',
        }}
        src={getPosterUrl()}
      />
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p>{voteAverage}</p>
        <p>{releaseDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Movie;
