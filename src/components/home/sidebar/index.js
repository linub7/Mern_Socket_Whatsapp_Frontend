import { useState } from 'react';

import HomeSidebarHeader from './header';
import HomeSideBarNotifications from './notifications';
import HomeSideBarSearch from './search';

const HomeSideBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
      <HomeSidebarHeader />
      <HomeSideBarNotifications />
      <HomeSideBarSearch searchResultLength={searchResult?.length} />
    </div>
  );
};

export default HomeSideBar;
