import { useState } from 'react';
import { useSelector } from 'react-redux';

import FilePreviewHandleAndSend from './handle-send';
import FilesPreviewHeader from './header';
import FilePreviewInput from './input';
import FilePreviewViewer from './viewer';

const FilesPreview = () => {
  const [message, setMessage] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const { files } = useSelector((state) => state.chat);
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-2">
        <FilesPreviewHeader files={files} activeIdx={activeIdx} />
        <FilePreviewViewer files={files} activeIdx={activeIdx} />
        <div className="w-full flex flex-col items-center">
          <FilePreviewInput message={message} setMessage={setMessage} />
          <FilePreviewHandleAndSend
            files={files}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default FilesPreview;
