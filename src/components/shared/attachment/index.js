import { AttachmentIcon } from 'assets/svg';
import HomeMenuItem from '../menu-item';
import AttachmentMenu from './menu';

const Attachment = ({ onClick = () => {}, isVisibleAttachment }) => {
  return (
    <>
      <HomeMenuItem className="relative" onClick={onClick}>
        <AttachmentIcon className={'dark:fill-dark_svg_1'} />
      </HomeMenuItem>
      {isVisibleAttachment && <AttachmentMenu />}
    </>
  );
};

export default Attachment;
