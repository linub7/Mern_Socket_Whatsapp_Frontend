import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { PhotoIcon } from 'assets/svg';
import AttachmentMenuItem from '../item';
import { IMAGE_SIZE, IMAGE_TYPES } from 'constants';
import { addFilesAction } from 'store/slices/chat';

const AttachmentMenuPhoto = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => inputRef.current.click();

  const handleChange = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((item) => {
      if (
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
        return toast.error('Please select an image format!');
      }

      if (item?.size >= IMAGE_SIZE * 1024 * 1024) {
        files = files?.filter((el) => el?.name !== item?.name);
        return toast.error(`Please select images less than ${IMAGE_SIZE}MB`);
      }

      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (e) => {
        dispatch(
          addFilesAction({
            file: item,
            imgData: e.target.result,
            type: item?.type?.split('/')[0],
          })
        ); // imgData: based64
      };
    });
  };

  return (
    <>
      <AttachmentMenuItem btnStyle="bg-[#BF59CF]" onClick={handleClick}>
        <PhotoIcon />
      </AttachmentMenuItem>
      <input
        type="file"
        multiple
        hidden
        ref={inputRef}
        accept={IMAGE_TYPES}
        onChange={handleChange}
      />
    </>
  );
};

export default AttachmentMenuPhoto;
