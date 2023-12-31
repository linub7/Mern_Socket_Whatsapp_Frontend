import { useState } from 'react';

import HomeSidebarHeader from './header';
import HomeSideBarNotifications from './notifications';
import HomeSideBarSearch from './search';
import HomeSideBarConversations from './conversations';
import HomeSideBarSearchResult from './search-result';

const HomeSideBar = ({ onlineUsers }) => {
  const [show, setShow] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      <HomeSidebarHeader />
      <HomeSideBarNotifications />
      <HomeSideBarSearch
        setSearchResult={setSearchResult}
        searchResultLength={searchResult?.length}
        show={show}
        setShow={setShow}
      />
      {searchResult?.length > 0 ? (
        <HomeSideBarSearchResult
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          setShow={setShow}
        />
      ) : (
        <HomeSideBarConversations onlineUsers={onlineUsers} />
      )}
    </div>
  );
};

export default HomeSideBar;
