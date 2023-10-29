import { SendIcon } from 'assets/svg';
import FilePreviewHandleAndSendAddMore from './add-more';

const FilePreviewHandleAndSend = ({ files, activeIdx, setActiveIdx }) => {
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2">
      <span></span>
      <div className="flex gap-x-2">
        {files?.map((el, index) => (
          <div
            key={index}
            className={`w-14 h-14 border dark:border-white mt-2 rounded-md overflow-hidden cursor-pointer ${
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
              <img
                src={`/images/file/${el?.type}.png`}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            ) : (
              <img
                src={`/images/file/${el?.type}.png`}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            )}
          </div>
        ))}
        <FilePreviewHandleAndSendAddMore setActiveIdx={setActiveIdx} />
      </div>
      <div className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer">
        <SendIcon className={'fill-white'} />
      </div>
    </div>
  );
};

export default FilePreviewHandleAndSend;
