import Attachment from 'components/shared/attachment';
import EmojiPicker from 'components/shared/emoji-picker';
import HomeChatScreenInput from '../input';
import HomeChatScreenSendButton from '../send-button';

const HomeChatScreenActions = () => {
  return (
    <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none">
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachment />
        </ul>
        <HomeChatScreenInput placeholder={'Type a message'} />
        <HomeChatScreenSendButton />
      </div>
    </form>
  );
};

export default HomeChatScreenActions;
