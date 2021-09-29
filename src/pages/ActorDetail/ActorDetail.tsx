import React, { useEffect } from 'react';

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

  const { actor, searching, search } = useApp();

  useEffect(() => {
    const name = query.get('name');
    if (actor) return;
    if (!name) return;

    search(name);
  }, [actor, query, search]);

  const picture = getMovieDBPictureURL(actor?.profile_path);

  if (!searching) return <div>Buscando...</div>;
  if (!actor) return <div>Actor no encontrado</div>;

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
