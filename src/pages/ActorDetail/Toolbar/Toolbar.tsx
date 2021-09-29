import React from 'react';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useHistory } from 'react-router';

import styles from './Toolbar.module.scss';

const Toolbar: React.FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div className={styles.root}>
      <Button onClick={handleClick} type="link" className={styles.back}>
        <ArrowLeftOutlined />
        <span>Regresar</span>
      </Button>
    </div>
  );
};

export default Toolbar;
