import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { DocumentIcon } from 'assets/svg';
import AttachmentMenuItem from '../item';
import { DOCUMENT_SIZE, DOCUMENT_TYPES } from 'constants';
import { addFilesAction } from 'store/slices/chat';
import { getFileType } from 'utils/helper';
import AttachmentInput from 'components/shared/attachment-input';

const AttachmentMenuDocument = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => inputRef.current.click();

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
        item?.type !== 'audio/wav'
      ) {
        files = files?.filter((el) => el?.name !== item?.name);
        return toast.error('Please select a proper document format!');
      }

      if (item?.size >= DOCUMENT_SIZE * 1024 * 1024) {
        files = files?.filter((el) => el?.name !== item?.name);
        return toast.error(`Please select files less than ${DOCUMENT_SIZE}MB`);
      }

      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (e) => {
        dispatch(
          addFilesAction({
            file: item,
            type: getFileType(item?.type),
          })
        );
      };
    });
  };
  return (
    <>
      <AttachmentMenuItem btnStyle="bg-[#5F66CD]" onClick={handleClick}>
        <DocumentIcon />
        <AttachmentInput
          accept={DOCUMENT_TYPES}
          inputRef={inputRef}
          handleChange={handleChange}
        />
      </AttachmentMenuItem>
    </>
  );
};

export default AttachmentMenuDocument;
