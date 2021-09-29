import React from 'react';

import Actor from '@components/Actor';
import useApp from '@hooks/useApp';
import getMovieDBPictureURL from '@utils/getMovieDBPictureURL';

import styles from './Header.module.scss';

import Picture from '../Picture';

export interface HeaderProps {
  backgroundColor?: string;
  paddingLeft?: number | string;
  pictureWidth: number | string;
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor = '#194992',
  paddingLeft = 0,
  pictureWidth,
}: HeaderProps) => {
  const { actor } = useApp();

  const picture = getMovieDBPictureURL(actor?.profile_path);

  return (
    <div
      className={styles.root}
      style={{
        paddingLeft,
        marginTop: '10em',
        background: backgroundColor,
      }}
    >
      <Actor
        name={actor?.name}
        gender={actor?.gender}
        popularity={actor?.popularity}
      />
      <div
        style={{
          position: 'absolute',
          left: '2em',
          top: '-10em',
          width: '30em',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '0.5em',
          overflow: 'hidden',
        }}
      >
        <Picture width={pictureWidth} src={picture} />
      </div>
    </div>
  );
};

export default Header;
