import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { CloseIcon } from 'assets/svg';
import {
  DOCUMENT_TYPES,
  DOCUMENT_SIZE,
  IMAGE_TYPES,
  IMAGE_SIZE,
} from 'constants';
import { addFilesAction } from 'store/slices/chat';
import { getFileType } from 'utils/helper';
import AttachmentInput from 'components/shared/attachment-input';

const FilePreviewHandleAndSendAddMore = ({ setActiveIdx }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleOpen = () => inputRef.current.click();

  const handleChange = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((item) => {
      if (
        item?.type !== 'application/pdf' &&
        item?.type !== 'text/plain' &&
        item?.type !== 'application/msword' &&
        item?.type !==
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
        item?.type !== 'application/vnd.ms-powerpoint' &&
        item?.type !==
          'application/vnd.openxmlformats-officedocument.presentationml.presentation' &&
        item?.type !== 'application/vnd.ms-excel' &&
        item?.type !==
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
        item?.type !== 'application/vnd.rar' &&
        item?.type !== 'application/vnd.zip' &&
        item?.type !== 'audio/mpeg' &&
        item?.type !== 'audio/wav' &&
        item?.type !== 'image/png' &&
        item?.type !== 'image/jpg' &&
        item?.type !== 'image/jpeg' &&
        item?.type !== 'image/webp' &&
        item?.type !== 'image/gif' &&
        item?.type !== 'video/mp4' &&
        item?.type !== 'video/mpeg' &&
        item?.type !== 'video/webm'
      ) {
        files = files?.filter((el) => el?.name !== item?.name);
        return toast.error('Please select a proper format!');
      }

      const isDocument =
        item?.type?.split('/')[0] === 'image' ||
        item?.type?.split('/')[0] === 'video'
          ? false
          : true;
      const actualSize = isDocument ? DOCUMENT_SIZE : IMAGE_SIZE;
      if (item?.size >= actualSize * 1024 * 1024) {
        files = files?.filter((el) => el?.name !== item?.name);
        return toast.error(`Please select items less than ${actualSize}MB`);
      }

      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (e) => {
        isDocument
          ? dispatch(
              addFilesAction({
                file: item,
                type: getFileType(item?.type),
              })
            )
          : dispatch(
              addFilesAction({
                file: item,
                imgData: e.target.result,
                type: getFileType(item?.type),
              })
            ); // imgData: based64
      };
    });
  };
  return (
    <>
      <div className="w-14 h-14 border dark:border-white rounded-md flex items-center justify-center cursor-pointer mt-2">
        <span className="rotate-45" onClick={handleOpen}>
          <CloseIcon className={'dark:fill-dark_svg_1'} />
        </span>
        <AttachmentInput
          accept={`${DOCUMENT_TYPES},${IMAGE_TYPES}`}
          inputRef={inputRef}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default FilePreviewHandleAndSendAddMore;
