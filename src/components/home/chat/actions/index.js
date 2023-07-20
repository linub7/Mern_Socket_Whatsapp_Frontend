import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import Attachment from 'components/shared/attachment';
import EmojiPickerComponent from 'components/shared/emoji-picker';
import HomeChatScreenInput from '../input';
import HomeChatScreenSendButton from '../send-button';
import { sendMessageHandler } from 'api/messages';
import { addMessageToActiveConversationAction } from 'store/slices/chat';
import { setLoadingAction } from 'store/slices/status';

const HomeChatScreenActions = ({ conversationId, token }) => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.status);

  const handleChangeInput = (e) => setMessage(e.target?.value);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('conversation', conversationId);
    formData.append('message', message);

    // TODO: add files to formData formData.append('files', ...)

    dispatch(setLoadingAction(true));
    const { err, data } = await sendMessageHandler(formData, token);
    if (err) {
      console.log(err);
      dispatch(setLoadingAction(false));
      return toast.error(err?.message);
    }

    dispatch(setLoadingAction(false));
    dispatch(addMessageToActiveConversationAction(data?.data?.data));
    setMessage('');
  };
  return (
    <form
      onSubmit={handleSendMessage}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPickerComponent />
          <Attachment />
        </ul>
        <HomeChatScreenInput
          placeholder={'Type a message'}
          value={message}
          onChange={handleChangeInput}
        />
        <HomeChatScreenSendButton disabled={!message} loading={loading} />
      </div>
    </form>
  );
};

export default HomeChatScreenActions;
