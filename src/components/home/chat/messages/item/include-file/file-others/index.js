import { DownloadIcon } from 'assets/svg';

const FileOthers = ({ file }) => {
  return (
    <div className="bg-green_3 p-2 rounded-lg">
      <div className="flex justify-between items-center gap-x-8">
        <div className="flex items-center gap-2">
          {file?.format === 'pdf' ? (
            <img
              src={'/images/file/PDF.png'}
              alt="pdf"
              className="w-8 object-contain"
            />
          ) : (
            <img
              src={'/images/file/DEFAULT.png'}
              alt="other"
              className="w-8 object-contain"
            />
          )}
          <div className="flex flex-col gap-2">
            <h1>{file?.public_id}</h1>
            <span className="text-sm">
              {file?.format !== undefined ? file?.format : null} {file?.bytes}B
            </span>
          </div>
        </div>
        <a href={file?.secure_url} target="_blank" rel="noreferrer" download>
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export default FileOthers;
