import React from 'react';

import { Layout, Spin, Typography } from 'antd';

import styles from './Actor.module.scss';

const { Title, Paragraph } = Typography;

export interface ActorProps {
  children?: React.ReactNode;
  name?: string;
  gender?: number;
  popularity?: number;
}

const Actor: React.FC<ActorProps> = ({
  name,
  gender,
  popularity,
}: ActorProps) => {
  return (
    <div>
      <h1 className={styles.text}>{name}</h1>
      <h2 className={styles.text}>{gender === 2 ? 'Hombre' : 'Mujer'}</h2>
      <h2 className={styles.text}>{`Popularidad: ${popularity}`}</h2>
    </div>
  );
};

export default Actor;
