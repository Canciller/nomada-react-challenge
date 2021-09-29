import { useCallback, useEffect, useState } from 'react';

import { UploadChangeParam } from 'antd/lib/upload';

import { UploaderFileType } from '@components/Uploader';
import getBase64 from '@utils/getBase64';

export default function useUploader() {
  const [fileList, setFileList] = useState<UploaderFileType[]>([]);
  const [file, setFile] = useState<UploaderFileType | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const handleChange = useCallback(
    (info: UploadChangeParam<UploaderFileType>) => {
      let fileList = [...info.fileList];

      fileList = fileList.slice(-1);

      fileList = fileList.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });

      setFileList(fileList);
    },
    [],
  );

  const handlePreview = useCallback(async (file: UploaderFileType) => {
    if (!file.url && !file.preview)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      file.preview = await getBase64(file.originFileObj as Blob);

    setPreview(file.preview);
  }, []);

  useEffect(() => {
    setFile(fileList.length > 0 ? fileList[0] : undefined);
  }, [fileList]);

  useEffect(() => {
    if (file) handlePreview(file);
  }, [file, handlePreview]);

  return {
    fileList,
    file,
    preview,
    handleChange,
    handlePreview,
  };
}
