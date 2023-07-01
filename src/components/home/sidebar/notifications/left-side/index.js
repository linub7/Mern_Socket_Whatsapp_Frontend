import { ArrowIcon, NotificationIcon } from 'assets/svg';

const HomeSideBarNotificationsLeftSide = () => {
  return (
    <div className="flex items-center gap-x-4 ">
      <div className="cursor-pointer">
        <NotificationIcon className={'dark:fill-blue_1'} />
      </div>
      <div className="flex flex-col">
        <span className="text-primary">Get notified of new messages</span>
        <span className="text-secondary mt-0.5 flex items-center gap-0.5">
          Turn on desktop notifications
          <ArrowIcon className={'dark:fill-dark_svg_2 mt-1'} />
        </span>
      </div>
    </div>
  );
};

export default HomeSideBarNotificationsLeftSide;
