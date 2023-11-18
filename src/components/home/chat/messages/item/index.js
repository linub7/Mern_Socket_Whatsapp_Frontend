import moment from 'moment';

import { getImage } from 'utils/helper';

const HomeChatScreenMessageItem = ({ item, me }) => {
  const source = getImage(item?.sender?.picture);
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        me ? 'ml-auto justify-end' : ''
      }`}
    >
      <div
        className={
          item?.conversation?.isGroup
            ? `flex ${!me ? 'flex-row' : 'flex-row-reverse'} items-end gap-1`
            : ''
        }
      >
        {item?.conversation?.isGroup && (
          <div className="">
            <img
              src={source}
              alt={item?.sender?.name}
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
        <div
          className={`relative h-full dark:text-dark_text_1 p-2 rounded-lg ${
            me ? 'bg-green_3' : 'dark:bg-dark_bg_2'
          }`}
        >
          <p className="float-left h-full text-sm pb-4 pr-8">{item?.message}</p>
          <span className="absolute right-1.5 bottom-1.5 text-xs text-dark_text_5 leading-none">
            {moment(item?.createdAt).format('HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeChatScreenMessageItem;
