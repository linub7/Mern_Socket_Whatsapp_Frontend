import { useState } from 'react';

import HomeSidebarHeader from './header';
import HomeSideBarNotifications from './notifications';
import HomeSideBarSearch from './search';
import HomeSideBarConversations from './conversations';
import HomeSideBarSearchResult from './search-result';

const HomeSideBar = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="w-[40%] h-full select-none">
      <HomeSidebarHeader />
      <HomeSideBarNotifications />
      <HomeSideBarSearch
        setSearchResult={setSearchResult}
        searchResultLength={searchResult?.length}
      />
      {searchResult?.length > 0 ? (
        <HomeSideBarSearchResult searchResult={searchResult} />
      ) : (
        <HomeSideBarConversations />
      )}
    </div>
  );
};

export default HomeSideBar;
