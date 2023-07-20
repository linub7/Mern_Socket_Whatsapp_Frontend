import EmojiPicker from 'emoji-picker-react';

import { CloseIcon, EmojiIcon } from 'assets/svg';
import HomeMenuItem from '../menu-item';

const EmojiPickerComponent = ({
  onEmojiClick = () => {},
  onClick = () => {},
  isEmojiVisible,
}) => {
  return (
    <>
      <HomeMenuItem onClick={onClick}>
        {isEmojiVisible ? (
          <CloseIcon className={'dark:fill-dark_svg_1'} />
        ) : (
          <EmojiIcon className={'dark:fill-dark_svg_1'} />
        )}
      </HomeMenuItem>
      {isEmojiVisible && (
        <div className="openEmojiAnimation absolute w-full bottom-[60px] left-[-0.5px]">
          <EmojiPicker
            theme={'dark'}
            emojiStyle="google"
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </>
  );
};

export default EmojiPickerComponent;
