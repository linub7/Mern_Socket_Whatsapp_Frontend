import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { ReturnIcon } from 'assets/svg';
import HomeSidebarHeaderCreateGroupUnderlineInput from './underline-input';
import HomeSidebarHeaderCreateGroupMultipleSelect from './multiple-select';
import { searchUsersHandler } from 'api/user';
import { getImage } from 'utils/helper';
import HomeSidebarHeaderCreateGroupSubmitButton from './submit-button';
import { createGroupConversationHandler } from 'api/conversations';
import SocketContext from 'context/SocketContext';
import {
  addToConversationsAction,
  setActiveConversationAction,
} from 'store/slices/chat';

const HomeSidebarHeaderCreateGroup = ({
  user,
  handleCloseCreateGroupMenu = () => {},
  setShowCreateGroup = () => {},
}) => {
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { loading, status } = useSelector((state) => state.status);
  const { conversations } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const socket = useContext(SocketContext);

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

  const handleCreateGroup = async () => {
    if (status === 'loading') return;
    let users = [];
    for (const el of selectedUsers) {
      users?.push(el?.value);
    }
    const { err, data } = await createGroupConversationHandler(
      users,
      name,
      user?.token
    );

    if (err) {
      console.log(err);
      return toast.error(err?.message);
    }
    await dispatch(setActiveConversationAction(data?.data?.data));
    socket.emit('join-conversation', data?.data?.data?._id);
    const idx = conversations.findIndex(
      (item) => item?._id === data?.data?.data?._id
    );
    if (idx === -1) {
      dispatch(addToConversationsAction(data?.data?.data));
    }
    setShowCreateGroup(false);
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
          disabled={loading || selectedUsers?.length < 1 || !name}
          onClick={handleCreateGroup}
        />
      </div>
    </div>
  );
};

export default HomeSidebarHeaderCreateGroup;
