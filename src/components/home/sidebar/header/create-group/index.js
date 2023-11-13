import { useState } from 'react';

import { ReturnIcon } from 'assets/svg';
import HomeSidebarHeaderCreateGroupUnderlineInput from './underline-input';
import HomeSidebarHeaderCreateGroupMultipleSelect from './multiple-select';
import { searchUsersHandler } from 'api/user';
import toast from 'react-hot-toast';
import { getImage } from 'utils/helper';
import HomeSidebarHeaderCreateGroupSubmitButton from './submit-button';
import { useSelector } from 'react-redux';

const HomeSidebarHeaderCreateGroup = ({
  user,
  handleCloseCreateGroupMenu = () => {},
}) => {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { loading } = useSelector((state) => state.status);

  const handleChangeInput = (e) => setName(e.target.value);

  const handleSearch = async (e) => {
    setSearchResult([]);
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
      if (data?.data?.data?.length > 0) {
        let tmpArray = [];
        data?.data?.data?.forEach((el) => {
          const picture = getImage(el?.picture?.url);
          // react-select items must have value and label ->
          let tmp = {
            value: el?._id,
            label: el?.name,
            picture,
          };
          tmpArray.push(tmp);
        });
        setSearchResult(tmpArray);
      } else {
        setSearchResult([]);
      }
    } else {
      setSearchResult([]);
    }
  };

  const handleCreateGroup = () => {
    console.log('handleCreateGroup');
  };

  return (
    <div className="createGroupAnimation relative flex0030 h-full z-40">
      <div className="mt-5">
        <button
          className="btn w-6 h-6 border"
          onClick={handleCloseCreateGroupMenu}
        >
          <ReturnIcon className={'fill-white'} />
        </button>
        <HomeSidebarHeaderCreateGroupUnderlineInput
          value={name}
          onChange={handleChangeInput}
        />
        <HomeSidebarHeaderCreateGroupMultipleSelect
          options={searchResult}
          onChange={setSelectedUsers}
          onKeyDown={handleSearch}
        />
        <HomeSidebarHeaderCreateGroupSubmitButton
          loading={loading}
          disabled={loading || selectedUsers?.length < 2 || !name}
          onClick={handleCreateGroup}
        />
      </div>
    </div>
  );
};

export default HomeSidebarHeaderCreateGroup;
