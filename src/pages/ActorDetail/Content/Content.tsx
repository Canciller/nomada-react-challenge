import React from 'react';

import { NotificationFilled } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

import Movies from '@components/Movies';
import useApp from '@hooks/useApp';
import getMovieDBPictureURL from '@utils/getMovieDBPictureURL';

import styles from './Content.module.scss';

const { Title } = Typography;

export interface ContentProps {
  paddingLeft?: number | string;
}

const Content: React.FC<ContentProps> = ({ paddingLeft = 0 }: ContentProps) => {
  const { movies } = useApp();

  return (
    <div
      className={styles.root}
      style={{
        paddingLeft,
      }}
    >
      <Title
        style={{
          fontWeight: 'normal',
          marginBottom: 0,
        }}
      >
        <NotificationFilled />
        <span>{' Peliculas'}</span>
      </Title>
      <Divider />
      <Movies
        movies={movies}
        getPosterUrl={movie => {
          return getMovieDBPictureURL(movie.poster_path);
        }}
      />
    </div>
  );
};

export default Content;
