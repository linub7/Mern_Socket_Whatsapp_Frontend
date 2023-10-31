import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import FilePreviewHandleAndSend from './handle-send';
import FilesPreviewHeader from './header';
import FilePreviewInput from './input';
import FilePreviewViewer from './viewer';
import { sendMessageHandler } from 'api/messages';
import {
  addMessageToActiveConversationAction,
  makeEmptyFilesAction,
  updateFilesAction,
} from 'store/slices/chat';
import SocketContext from 'context/SocketContext';

const FilesPreview = ({ conversationId, token }) => {
  const [message, setMessage] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.chat);

  const socket = useContext(SocketContext);

  const handleSendFiles = async () => {
    const formData = new FormData();
    formData.append('conversation', conversationId);
    formData.append('message', message);

    for (const el of files) {
      formData.append('files', el.file);
    }

    setLoading(true);
    const { err, data } = await sendMessageHandler(formData, token);
    if (err) {
      console.log(err);
      setLoading(false);
      return toast.error(err?.message);
    }
    setLoading(false);
    await dispatch(makeEmptyFilesAction());
    await dispatch(addMessageToActiveConversationAction(data?.data?.data));
    socket.emit('send-message', data?.data?.data);
  };

  const handleRemoveFile = (index) => dispatch(updateFilesAction(index));

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
            loading={loading}
            onClick={handleSendFiles}
            handleRemoveFile={handleRemoveFile}
          />
        </div>
      </div>
    </div>
  );
};

export default FilesPreview;
