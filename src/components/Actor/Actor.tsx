import React from 'react';

import {
  ManOutlined,
  WomanOutlined,
  LikeFilled,
  SmileFilled,
} from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

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
  const style: React.CSSProperties = {
    margin: '0.2em 0',
    color: 'white',
    fontWeight: 'normal',
  };

  return (
    <div>
      <Title style={style}>{name}</Title>
      <Title level={3} style={style}>
        {gender === 2 ? (
          <ManOutlined />
        ) : gender === 1 ? (
          <WomanOutlined />
        ) : (
          <SmileFilled />
        )}
        <span
          style={{
            marginLeft: '0.5em',
          }}
        >
          {gender === 2
            ? 'Hombre'
            : gender === 1
            ? 'Mujer'
            : 'Genero indefinido'}
        </span>
      </Title>
      <Title level={3} style={style}>
        <LikeFilled
          style={{
            fontSize: '0.9em',
          }}
        />
        <span
          style={{
            margin: '0 0.5em',
          }}
        >
          Popularidad:
        </span>
        <span>{popularity}</span>
      </Title>
    </div>
  );
};

export default Actor;
