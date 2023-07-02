import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeSideBarSearchResultItem from './item';
import { setStatusAction } from 'store/slices/status';
import { openOrCreateConversationHandler } from 'api/conversations';
import {
  addToConversationsAction,
  setActiveConversationAction,
} from 'store/slices/chat';

const HomeSideBarSearchResult = ({ searchResult }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { conversations } = useSelector((state) => state.chat);

  const handleClickSearchResultItem = async (userId) => {
    dispatch(setStatusAction('loading'));
    const { err, data } = await openOrCreateConversationHandler(
      userId,
      user?.token
    );
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    dispatch(setStatusAction('done'));
    dispatch(setActiveConversationAction(data?.data?.data));
    const idx = conversations.findIndex(
      (item) => item?._id === data?.data?.data?._id
    );
    if (idx === -1) {
      dispatch(addToConversationsAction(data?.data?.data));
    }
  };

  return (
    <div className="w-full conversations custom-scrollbar">
      <div className="flex flex-col px-8 pt-8">
        <h1 className="font-extralight text-base text-green_2">Contacts</h1>
        <span className="w-full mt-4 ml-10 border-b dark:border-b-dark_border_1"></span>
      </div>
      <ul>
        {searchResult?.map((item, index) => (
          <HomeSideBarSearchResultItem
            key={index}
            item={item}
            onClick={() => handleClickSearchResultItem(item._id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomeSideBarSearchResult;
