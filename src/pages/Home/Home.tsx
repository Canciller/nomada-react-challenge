import React, { useEffect, useState } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { useHistory } from 'react-router';

import Uploader, { UploaderFileType } from '@components/Uploader';
import useApp from '@hooks/useApp';
import getBase64 from '@utils/getBase64';

import styles from './Home.module.scss';

const { Content } = Layout;

const Home: React.FC = () => {
  const history = useHistory();
  const [fileList, setFileList] = useState<UploaderFileType[]>([]);
  const [file, setFile] = useState<UploaderFileType | undefined>();
  const [preview, setPreview] = useState<string | undefined>();
  const { searching, search } = useApp();

  const handleChange = (info: UploadChangeParam<UploaderFileType>) => {
    let fileList = [...info.fileList];

    fileList = fileList.slice(-1);

    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(fileList);
  };

  const handlePreview = async (file: UploaderFileType) => {
    if (!file.url && !file.preview)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      file.preview = await getBase64(file.originFileObj as Blob);

    setPreview(file.preview);
  };

  const handleSearch = () => {
    search(file?.originFileObj as Blob).then(found => {
      if (found) history.push(`/detail?name=${found.name}`);
    });
  };

  useEffect(() => {
    setFile(fileList.length > 0 ? fileList[0] : undefined);
  }, [fileList]);

  useEffect(() => {
    if (file) handlePreview(file);
  }, [file]);

  return (
    <Layout className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>¿Quién es ese actor?</h1>
        <Uploader
          onChange={handleChange}
          onDrop={e => {
            console.log(e);
          }}
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
