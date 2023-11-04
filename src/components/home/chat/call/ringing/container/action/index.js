import { CloseIcon, ValidIcon } from 'assets/svg';

const HomeChatScreenCallRingingContainerAction = () => {
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
          <CloseIcon className={'fill-white w-5'} />
        </button>
      </li>
      <li>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500">
          <ValidIcon />
        </button>
      </li>
    </ul>
  );
};

export default HomeChatScreenCallRingingContainerAction;
