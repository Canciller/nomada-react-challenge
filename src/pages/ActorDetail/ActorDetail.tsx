import React, { useEffect } from 'react';

import { MehOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import Actor from '@components/Actor';
import Movies from '@components/Movies';
import useApp from '@hooks/useApp';
import useQuery from '@hooks/useQuery';
import getMovieDBPictureURL from '@utils/getMovieDBPictureURL';

import Picture from './Picture';
import Toolbar from './Toolbar';

import styles from './ActorDetail.module.scss';

const ActorDetail: React.FC = () => {
  const query = useQuery();

  const { actor, searching, search, error } = useApp();

  useEffect(() => {
    const name = query.get('name');
    if (actor) return;
    if (!name) return;

    search(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const picture = getMovieDBPictureURL(actor?.profile_path);

  if (searching)
    return (
      <div
        className={styles.root}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '1em',
        }}
      >
        <Spin size="large" />
        <p
          style={{
            marginTop: '1em',
            fontSize: '1.5em',
          }}
        >
          Cargando
        </p>
      </div>
    );

  if (!actor)
    return (
      <div
        className={styles.root}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '1em',
        }}
      >
        <MehOutlined
          style={{
            fontSize: '6em',
          }}
        />
        <p
          style={{
            marginTop: '1em',
            fontSize: '1.5em',
          }}
        >
          {error ? error.message : 'Actor no encontrado'}
        </p>
        <Toolbar />
      </div>
    );

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Toolbar />
        <div className={styles.content}>
          <section>
            <Picture src={picture} />
            <Actor
              name={actor.name}
              gender={actor.gender}
              popularity={actor.popularity}
            />
          </section>
          <section className={styles.right}>
            <h2
              style={{
                fontWeight: 'bold',
              }}
            >
              Peliculas
            </h2>
            <Movies
              movies={actor.known_for}
              getPosterUrl={movie => {
                return getMovieDBPictureURL(movie.poster_path);
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
