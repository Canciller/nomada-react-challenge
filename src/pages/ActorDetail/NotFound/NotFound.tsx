import React from 'react';

import { MehOutlined } from '@ant-design/icons';

import Center from '@components/Center';
import useApp from '@hooks/useApp';

import Toolbar from '../Toolbar';

const NotFound: React.FC = () => {
  const { error } = useApp();

  return (
    <Center
      style={{
        minHeight: '100vh',
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
    </Center>
  );
};

export default NotFound;
