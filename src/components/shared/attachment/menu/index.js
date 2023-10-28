import { CameraIcon, ContactIcon, PollIcon, StickerIcon } from 'assets/svg';
import AttachmentMenuItem from './item';
import AttachmentMenuPhoto from './photo-attachment';
import AttachmentMenuDocument from './document-attachment';

const AttachmentMenu = () => {
  return (
    <ul className="absolute bottom-16 left-14 openEmojiAnimation">
      <AttachmentMenuItem onClick={() => console.log('poll')}>
        <PollIcon />
      </AttachmentMenuItem>
      <AttachmentMenuItem
        btnStyle="bg-[#0eabf4]"
        onClick={() => console.log('CONTACT')}
      >
        <ContactIcon />
      </AttachmentMenuItem>
      <AttachmentMenuDocument />
      <AttachmentMenuItem
        btnStyle="bg-[#D3396D]"
        onClick={() => console.log('camera')}
      >
        <CameraIcon />
      </AttachmentMenuItem>
      <AttachmentMenuItem onClick={() => console.log('Sticker')}>
        <StickerIcon />
      </AttachmentMenuItem>
      <AttachmentMenuPhoto />
    </ul>
  );
};

export default AttachmentMenu;
