import moment from 'moment';
import FileImageVideo from './file-image-video';
import FileOthers from './file-others';

const HomeChatScreenMessageItemIncludeFile = ({
  file,
  me,
  message,
  createdAt,
}) => {
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        me ? 'ml-auto justify-end' : ''
      }`}
    >
      <div>
        <div
          className={`relative h-full dark:text-dark_text_1 rounded-lg ${
            me
              ? `${
                  file?.format === 'jpg' ||
                  file?.format === 'png' ||
                  file?.format === 'webp' ||
                  file?.format === 'jpeg' ||
                  file?.format === 'gif'
                    ? 'bg-white'
                    : 'bg-green_3'
                } border-[3px] border-green_3`
              : 'dark:bg-dark_bg_2'
          }`}
        >
          <div className="h-full text-sm">
            {file?.format === 'jpg' ||
            file?.format === 'png' ||
            file?.format === 'webp' ||
            file?.format === 'jpeg' ||
            file?.format === 'gif' ||
            file?.format === 'mp4' ? (
              <FileImageVideo url={file?.secure_url} type={file?.format} />
            ) : (
              <FileOthers file={file} />
            )}
          </div>
          <span className="absolute right-1.5 bottom-1.5 text-xs text-dark_text_5 leading-none">
            {moment(createdAt).format('HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeChatScreenMessageItemIncludeFile;
