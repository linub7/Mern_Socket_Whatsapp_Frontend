import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeSideBarConversationItem from './item';
import { setStatusAction } from 'store/slices/status';
import { openOrCreateConversationHandler } from 'api/conversations';
import { setActiveConversationAction } from 'store/slices/chat';
import { getReceiverId } from 'utils/helper';

const HomeSideBarConversations = () => {
  const { conversations } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const handleClickConversation = async (item) => {
    if (activeConversation?._id === item?._id) return;
    const receiverId = getReceiverId(user, item?.users);

    dispatch(setStatusAction('loading'));
    const { err, data } = await openOrCreateConversationHandler(
      receiverId,
      user?.token
    );
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    dispatch(setStatusAction('done'));
    dispatch(setActiveConversationAction(data?.data?.data));
  };

  return (
    <div className="conversations custom-scrollbar">
      <ul>
        {conversations?.map((item, index) => (
          <HomeSideBarConversationItem
            key={index}
            item={item}
            onClick={() => handleClickConversation(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomeSideBarConversations;
