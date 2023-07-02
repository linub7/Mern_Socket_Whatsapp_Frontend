import { AttachmentIcon } from 'assets/svg';
import HomeMenuItem from '../menu-item';

const Attachment = () => {
  return (
    <HomeMenuItem className="relative">
      <AttachmentIcon className={'dark:fill-dark_svg_1'} />
    </HomeMenuItem>
  );
};

export default Attachment;
