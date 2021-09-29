import React from 'react';

import { Spin } from 'antd';

import Center from '@components/Center';

const Searching: React.FC = () => {
  return (
    <Center
      style={{
        minHeight: '100vh',
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
    </Center>
  );
};

export default Searching;
