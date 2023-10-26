import { toCapitalize } from 'utils/helper';

const HomeChatScreenHeaderLeftSide = ({ source, name, userStatus }) => {
  return (
    <div className="flex items-center gap-x-4">
      <button className="btn">
        <img
          src={source}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </button>
      <div className="flex flex-col">
        <h1 className="dark:text-white text-base font-bold">
          {toCapitalize(name?.split(' ')[0])}
        </h1>
        <span className="text-xs dark:text-dark_svg_2">{userStatus}</span>
      </div>
    </div>
  );
};

export default HomeChatScreenHeaderLeftSide;
