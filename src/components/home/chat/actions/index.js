import { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import Attachment from 'components/shared/attachment';
import EmojiPickerComponent from 'components/shared/emoji-picker';
import HomeChatScreenInput from '../input';
import HomeChatScreenSendButton from '../send-button';
import { sendMessageHandler } from 'api/messages';
import { addMessageToActiveConversationAction } from 'store/slices/chat';
import { setLoadingAction } from 'store/slices/status';
import SocketContext from 'context/SocketContext';

const HomeChatScreenActions = ({
  conversationId,
  token,
  isTyping,
  setIsTyping,
}) => {
  const [message, setMessage] = useState('');
  const [cursorPosition, setCursorPosition] = useState();
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);
  const [isVisibleAttachment, setIsVisibleAttachment] = useState(false);

  const textRef = useRef();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const socket = useContext(SocketContext);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.status);
  const { files } = useSelector((state) => state.chat);

  const handleToggleEmojiPicker = () => {
    setIsEmojiVisible((prev) => !prev);
    setIsVisibleAttachment(false);
  };
  const handleToggleAttachment = () => {
    setIsVisibleAttachment((prev) => !prev);
    setIsEmojiVisible(false);
  };
  const handleChangeInput = (e) => {
    setMessage(e.target?.value);
    if (!isTyping) {
      setIsTyping(true);
      socket.emit('typing', conversationId);
    }
    const lastTypingTime = new Date().getTime(); // getTime() returns in ms
    const timer = 2000;
    setTimeout(() => {
      const now = new Date().getTime();
      if (now - lastTypingTime >= timer && isTyping) {
        socket.emit('stop-typing', conversationId);
        setIsTyping(false);
      }
    }, timer);
  };

  const handleEmojiPick = (emojiData, e) => {
    const { emoji } = emojiData;
    const reference = textRef.current;
    reference.focus();
    const start = message?.substring(0, reference.selectionStart);
    const end = message?.substring(reference.selectionStart);
    const newMessage = `${start}${emoji}${end}`;
    setMessage(newMessage);
    setCursorPosition(start?.length + emoji?.length);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('conversation', conversationId);
    formData.append('message', message);
    formData.append('files', files);

    dispatch(setLoadingAction(true));
    const { err, data } = await sendMessageHandler(formData, token);
    if (err) {
      console.log(err);
      dispatch(setLoadingAction(false));
      return toast.error(err?.message);
    }

    await dispatch(setLoadingAction(false));
    await dispatch(addMessageToActiveConversationAction(data?.data?.data));
    socket.emit('send-message', data?.data?.data);
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPickerComponent
            onEmojiClick={handleEmojiPick}
            isEmojiVisible={isEmojiVisible}
            onClick={handleToggleEmojiPicker}
          />
          <Attachment
            isVisibleAttachment={isVisibleAttachment}
            onClick={handleToggleAttachment}
          />
        </ul>
        <HomeChatScreenInput
          placeholder={'Type a message'}
          value={message}
          onChange={handleChangeInput}
          textRef={textRef}
        />
        <HomeChatScreenSendButton
          disabled={!message || loading}
          loading={loading}
        />
      </div>
    </form>
  );
};

export default HomeChatScreenActions;
