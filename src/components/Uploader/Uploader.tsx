import React from 'react';

import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { DraggerProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';

import styles from './Uploader.module.scss';

const { Dragger } = Upload;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UploaderFileType = UploadFile<any>;

export interface UploaderProps extends DraggerProps {
  showPreview?: boolean;
  renderPreview?: () => JSX.Element;
}

const Uploader: React.FC<UploaderProps> = ({
  showPreview = false,
  renderPreview,
  ...props
}: UploaderProps) => {
  return (
    <Dragger {...props}>
      {showPreview && renderPreview ? (
        <div className={styles.preview}>{renderPreview()}</div>
      ) : (
        <p className="ant-upload-drag-icon">
          <InboxOutlined
            style={{
              fontSize: '8em',
            }}
          />
        </p>
      )}
      <p
        className="ant-upload-text"
        style={{
          fontSize: '2em',
        }}
      >
        Haz clic o arrastra una imagen
      </p>
      <p
        className="ant-upload-hint"
        style={{
          fontSize: '1.2em',
        }}
      >
        Selecciona una foto de un actor famoso para conocer quien es y en qué
        peliculas a salido.
      </p>
    </Dragger>
  );
};

export default Uploader;
