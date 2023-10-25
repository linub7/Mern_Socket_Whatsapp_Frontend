import { getImage } from 'utils/helper';
import HomeSideBarConversationItemLeftSide from '../../conversations/item/left';
import HomeSideBarBorderBottom from '../../border-bottom';

const HomeSideBarSearchResultItem = ({ item, onClick }) => {
  const source = getImage(item?.picture?.url);
  return (
    <li
      className="list-none h-[72px] hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-x-3 py-[10px]">
        <HomeSideBarConversationItemLeftSide
          source={source}
          name={item?.name}
          message={item?.status}
          convName={item?.name}
        />
      </div>
      <HomeSideBarBorderBottom />
    </li>
  );
};

export default HomeSideBarSearchResultItem;
