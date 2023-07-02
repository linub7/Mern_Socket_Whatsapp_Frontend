import { dateHandler } from 'utils/helper';

const HomeSideBarConversationItemRightSide = ({ messageCreatedDate }) => {
  return (
    <div className="flex flex-col gap-y-4 items-end text-xs">
      <span className="dark:text-dark_text_2">
        {messageCreatedDate ? dateHandler(messageCreatedDate) : ''}
      </span>
    </div>
  );
};

export default HomeSideBarConversationItemRightSide;
