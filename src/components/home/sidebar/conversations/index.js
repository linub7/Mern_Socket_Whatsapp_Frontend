import { useSelector } from 'react-redux';

import HomeSideBarConversationItem from './item';

const HomeSideBarConversations = () => {
  const { conversations } = useSelector((state) => state.chat);

  return (
    <div className="conversations custom-scrollbar">
      <ul>
        {conversations?.map((item, index) => (
          <HomeSideBarConversationItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HomeSideBarConversations;
