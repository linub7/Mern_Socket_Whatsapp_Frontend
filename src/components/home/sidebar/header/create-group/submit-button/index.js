import ClipLoader from 'react-spinners/ClipLoader';

import { ValidIcon } from 'assets/svg';

const HomeSidebarHeaderCreateGroupSubmitButton = ({
  loading,
  disabled,
  onClick = () => {},
}) => {
  return (
    <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        disabled={disabled}
        className="btn bg-green_1 scale-150 hover:bg-green-500"
        onClick={onClick}
      >
        {loading ? <ClipLoader color={'#E9EDEF'} size={25} /> : <ValidIcon />}
      </button>
    </div>
  );
};

export default HomeSidebarHeaderCreateGroupSubmitButton;
