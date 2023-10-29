import { useDispatch } from 'react-redux';

import { CloseIcon } from 'assets/svg';
import { makeEmptyFilesAction } from 'store/slices/chat';

const FilesPreviewHeader = ({ files, activeIdx }) => {
  const dispatch = useDispatch();
  const handleClearFilesAndClosePreview = () =>
    dispatch(makeEmptyFilesAction());
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div
          className="translate-x-4 cursor-pointer"
          onClick={handleClearFilesAndClosePreview}
        >
          <CloseIcon className={'dark:fill-dark_svg_1'} />
        </div>
        <h1 className="dark:text-dark_text_1 text-[15px]">
          {files[activeIdx]?.file?.name}
        </h1>
        <span></span>
      </div>
    </div>
  );
};

export default FilesPreviewHeader;
