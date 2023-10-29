const FilePreviewViewer = ({ files, activeIdx }) => {
  return (
    <div className="w-full max-w-[60%]">
      <div className="flex justify-center items-center">
        {files[activeIdx]?.type === 'IMAGE' ? (
          <img
            src={files[activeIdx]?.imgData}
            alt={files[activeIdx]?.file?.name}
            className="max-w-[80%] object-contain hview"
          />
        ) : files[activeIdx]?.type === 'VIDEO' ? (
          <img
            src={`/images/file/${files[activeIdx]?.type}.png`}
            alt={files[activeIdx]?.file?.name}
          />
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            <img
              src={`/images/file/${files[activeIdx]?.type}.png`}
              alt={files[activeIdx]?.file?.name}
            />
            <h1 className="dark:text-dark_text_2 text-2xl">
              No Preview available
            </h1>
            <span className="dark:text-dark_text_2">
              {files[activeIdx]?.file?.size}kB - {files[activeIdx]?.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default FilePreviewViewer;
