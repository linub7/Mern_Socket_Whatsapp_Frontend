import {
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  PhotoIcon,
  PollIcon,
  StickerIcon,
} from 'assets/svg';
import AttachmentMenuItem from './item';

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
      <AttachmentMenuItem
        btnStyle="bg-[#5F66CD]"
        onClick={() => console.log('document')}
      >
        <DocumentIcon />
      </AttachmentMenuItem>
      <AttachmentMenuItem
        btnStyle="bg-[#D3396D]"
        onClick={() => console.log('camera')}
      >
        <CameraIcon />
      </AttachmentMenuItem>
      <AttachmentMenuItem onClick={() => console.log('Sticker')}>
        <StickerIcon />
      </AttachmentMenuItem>
      <AttachmentMenuItem
        btnStyle="bg-[#BF59CF]"
        onClick={() => console.log('photo')}
      >
        <PhotoIcon />
      </AttachmentMenuItem>
    </ul>
  );
};

export default AttachmentMenu;
