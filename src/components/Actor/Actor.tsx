import React from 'react';

import styles from './Actor.module.scss';

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
    <div className={styles.root}>
      <h1
        style={{
          fontWeight: 'bold',
        }}
      >
        {name}
      </h1>
      <p className={styles.gender}>{gender === 2 ? 'Hombre' : 'Mujer'}</p>
      <p className={styles.popularity}>{`Popularidad: ${popularity}`}</p>
    </div>
  );
};

export default Actor;
