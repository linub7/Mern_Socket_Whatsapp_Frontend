import { useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { FilterIcon, ReturnIcon, SearchIcon } from 'assets/svg';
import { searchUsersHandler } from 'api/user';

const HomeSideBarSearch = ({ searchResultLength, setSearchResult }) => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleBlur = () => searchResultLength === 0 && setShow(false);

  const handleSearch = async (e) => {
    const {
      target: { value },
      key,
    } = e;

    if (value.length >= 2 && key === 'Enter') {
      const { err, data } = await searchUsersHandler(value, user?.token);
      if (err) {
        console.log(err);
        return toast.error(err?.message);
      }
      setSearchResult(data?.data?.data);
    } else {
      setSearchResult([]);
    }
  };

  const handleClearSearchResult = () => setSearchResult([]);

  return (
    <div className="h-[49px] py-1.5">
      <div className="px-[10px]">
        <div className="flex items-center gap-x-2">
          <div className="w-full flex dark:bg-dark_bg_2 rounded-lg pl-2">
            {show || searchResultLength > 0 ? (
              <span
                className="w-8 flex items-center justify-center rotateAnimation cursor-pointer"
                onClick={handleClearSearchResult}
              >
                <ReturnIcon className={'fill-green_1 w-5'} />
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center">
                <SearchIcon className={'dark:fill-dark_svg_2 w-5'} />
              </span>
            )}
            <input
              type="text"
              placeholder="Search or Start a new chat"
              className="input"
              onFocus={() => setShow(true)}
              onBlur={handleBlur}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <button className="btn">
            <FilterIcon className={'dark:fill-dark_svg_2'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBarSearch;
