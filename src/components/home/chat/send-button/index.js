import ClipLoader from 'react-spinners/ClipLoader';

import { SendIcon } from 'assets/svg';

const HomeChatScreenSendButton = ({ disabled = true, loading = false }) => {
  return (
    <button type="submit" className="btn" disabled={disabled}>
      {loading ? (
        <ClipLoader color={'#E9EDEF'} size={25} />
      ) : (
        <SendIcon className={'dark:fill-dark_svg_1'} />
      )}
    </button>
  );
};

export default HomeChatScreenSendButton;
