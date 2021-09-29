import React, { useEffect } from 'react';

import { Layout } from 'antd';

import useApp from '@hooks/useApp';
import useQuery from '@hooks/useQuery';

import Content from './Content';
import Header from './Header';
import NotFound from './NotFound';
import Searching from './Searching';
import Toolbar from './Toolbar';

import styles from './ActorDetail.module.scss';

const IMAGE_WIDTH = '30em';
const IMAGE_PADDING = '4em';
const CONTENT_PADDING_LEFT = `calc(${IMAGE_WIDTH} + ${IMAGE_PADDING})`;

const ActorDetail: React.FC = () => {
  const query = useQuery();

  const { actor, searching, search } = useApp();

  useEffect(() => {
    const name = query.get('name');
    if (actor) return;
    if (!name) return;

    search(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (searching) return <Searching />;

  if (!actor) return <NotFound />;

  return (
    <Layout className={styles.root}>
      <div className={styles.container}>
        <Toolbar />
        <Header paddingLeft={CONTENT_PADDING_LEFT} pictureWidth={IMAGE_WIDTH} />
        <Content paddingLeft={CONTENT_PADDING_LEFT} />
      </div>
    </Layout>
  );
};

export default ActorDetail;
