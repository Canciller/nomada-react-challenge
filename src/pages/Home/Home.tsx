import React, { useEffect } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Layout, message } from 'antd';
import { useHistory } from 'react-router';

import Uploader from '@components/Uploader';
import useApp from '@hooks/useApp';
import useUploader from '@hooks/useUploader';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const history = useHistory();
  const { searching, search, error } = useApp();
  const { fileList, file, preview, handleChange } = useUploader();

  const handleSearch = () => {
    search(file?.originFileObj as Blob).then(found => {
      if (found) history.push(`/detail?name=${found.name}`);
    });
  };

  useEffect(() => {
    if (error) message.error(error.message);
  }, [error]);

  return (
    <Layout className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>¿Quién es ese actor?</h1>
        <Uploader
          onChange={handleChange}
          fileList={fileList}
          accept="image/png, image/jpeg"
          showUploadList={false}
          beforeUpload={() => false}
          showPreview={preview !== undefined}
          renderPreview={() => {
            return (
              <div
                className={styles.preview}
                style={{
                  backgroundImage: `url(${preview})`,
                }}
              />
            );
          }}
        />
        <div className={styles.footer}>
          <Button
            loading={searching}
            onClick={handleSearch}
            disabled={preview === undefined}
            className={styles.searchButton}
            type="primary"
          >
            <span
              style={{
                marginRight: '0.8em',
              }}
            >
              Buscar actor
            </span>
            <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
