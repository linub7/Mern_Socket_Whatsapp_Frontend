import { EmojiIcon } from 'assets/svg';
import HomeMenuItem from '../menu-item';

const EmojiPickerComponent = () => {
  return (
    <HomeMenuItem>
      <EmojiIcon className={'dark:fill-dark_svg_1'} />
    </HomeMenuItem>
  );
};

export default EmojiPickerComponent;
