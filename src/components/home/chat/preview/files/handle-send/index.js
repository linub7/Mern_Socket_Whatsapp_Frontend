import ClipLoader from 'react-spinners/ClipLoader';
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version

import { CloseIcon, SendIcon } from 'assets/svg';
import FilePreviewHandleAndSendAddMore from './add-more';

const FilePreviewHandleAndSend = ({
  files,
  activeIdx,
  setActiveIdx,
  loading,
  handleRemoveFile = () => {},
  onClick = () => {},
}) => {
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2">
      <span></span>
      <div className="flex gap-x-2">
        {files?.map((el, index) => (
          <div
            key={index}
            className={`fileThumbnail relative w-14 h-14 border dark:border-white mt-2 rounded-md overflow-hidden cursor-pointer ${
              activeIdx === index ? 'border-[3px] !border-green_1' : ''
            }`}
            onClick={() => setActiveIdx(index)}
          >
            {el?.type === 'IMAGE' ? (
              <img
                src={el?.imgData}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : el?.type === 'VIDEO' ? (
              <VideoThumbnail videoUrl={el?.imgData} />
            ) : (
              <img
                src={`/images/file/${el?.type}.png`}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            )}
            <div
              className="removeFileIcon hidden"
              onClick={() => handleRemoveFile(index)}
            >
              <CloseIcon
                className={'dark:fill-white absolute right-1 top-1 h-4 w-4'}
              />
            </div>
          </div>
        ))}
        <FilePreviewHandleAndSendAddMore setActiveIdx={setActiveIdx} />
      </div>
      <button
        disabled={loading}
        className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        {loading ? (
          <ClipLoader color={'#E9EDEF'} size={25} />
        ) : (
          <SendIcon className={'fill-white'} />
        )}
      </button>
    </div>
  );
};

export default FilePreviewHandleAndSend;
