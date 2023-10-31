const FileImageVideo = ({ url, type }) => {
  return (
    <div>
      {type === 'jpg' ||
      type === 'png' ||
      type === 'webp' ||
      type === 'jpeg' ||
      type === 'gif' ? (
        <img src={url} alt={url} className="cursor-pointer" />
      ) : (
        <video src={url} controls className="cursor-pointer"></video>
      )}
    </div>
  );
};

export default FileImageVideo;
