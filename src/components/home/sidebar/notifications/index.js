import HomeSideBarNotificationsLeftSide from './left-side';
import HomeSideBarNotificationsRightSide from './right-side';

const HomeSideBarNotifications = () => {
  return (
    <div className="h-[90px] dark:bg-dark_bg_3 flex items-center p-[13px]">
      <div className="w-full flex items-center justify-between">
        <HomeSideBarNotificationsLeftSide />
        <HomeSideBarNotificationsRightSide />
      </div>
    </div>
  );
};

export default HomeSideBarNotifications;
