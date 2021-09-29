import React, { HTMLAttributes } from 'react';

import { Layout } from 'antd';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({
  children,
  style = {},
  ...props
}: CenterProps) => {
  return (
    <Layout
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em',
        ...style,
      }}
      {...props}
    >
      {children}
    </Layout>
  );
};

export default Center;
