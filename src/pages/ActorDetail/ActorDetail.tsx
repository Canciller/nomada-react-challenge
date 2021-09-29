import React, { useEffect } from 'react';

import { MehOutlined, NotificationFilled } from '@ant-design/icons';
import { Layout, Spin, Typography, Divider } from 'antd';

import Actor from '@components/Actor';
import Movies from '@components/Movies';
import useApp from '@hooks/useApp';
import useQuery from '@hooks/useQuery';
import getMovieDBPictureURL from '@utils/getMovieDBPictureURL';

import Picture from './Picture';
import Toolbar from './Toolbar';

import styles from './ActorDetail.module.scss';

const { Title } = Typography;

const IMAGE_WIDTH = '30em';
const IMAGE_PADDING = '4em';
const LEFT_PADDING = `calc(${IMAGE_WIDTH} + ${IMAGE_PADDING})`;

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
      <Layout
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
      </Layout>
    );

  if (!actor)
    return (
      <Layout
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
      </Layout>
    );

  return (
    <Layout className={styles.root}>
      <div className={styles.container}>
        <Toolbar />
        <div
          className={styles.header}
          style={{
            paddingLeft: LEFT_PADDING,
            marginTop: '10em',
          }}
        >
          <Actor
            name={actor.name}
            gender={actor.gender}
            popularity={actor.popularity}
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
            <Picture width={IMAGE_WIDTH} src={picture} />
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            paddingLeft: LEFT_PADDING,
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
            movies={actor.known_for}
            getPosterUrl={movie => {
              return getMovieDBPictureURL(movie.poster_path);
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ActorDetail;
