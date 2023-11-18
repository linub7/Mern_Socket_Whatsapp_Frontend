import React, { useEffect, useRef } from 'react';

import HomeChatScreenMessageItem from './item';
import HomeChatScreenIsTyping from '../is-typing';
import HomeChatScreenMessageItemIncludeFile from './item/include-file';
import { getImage } from 'utils/helper';

const HomeChatScreenMessages = ({ messages, user, isTyping }) => {
  const endRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () =>
    endRef.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <div className="mb-[60px] bg-[url('https://e0.pxfuel.com/wallpapers/875/426/desktop-wallpaper-i-whatsapp-background-chat-whatsapp-graffiti.jpg')] bg-cover bg-no-repeat">
      <div className="custom-scrollbar overflow_scrollbar overflow-y-auto py-2 px-[5%]">
        {messages?.map((item, index) => (
          <React.Fragment key={index}>
            {item?.files?.length > 0
              ? item?.files?.map((file, j) => (
                  <HomeChatScreenMessageItemIncludeFile
                    key={j}
                    file={file}
                    me={
                      item?.sender?.id
                        ? item?.sender?.id === user?.id
                        : item?.sender === user?.id
                    }
                    message={item?.message}
                    createdAt={item?.createdAt}
                    isGroup={item?.conversation?.isGroup}
                    senderName={item?.sender?.name}
                    source={getImage(item?.sender?.picture)}
                  />
                ))
              : null}
            {item?.message?.length > 0 ? (
              <HomeChatScreenMessageItem
                item={item}
                me={
                  item?.sender?.id
                    ? item?.sender?.id === user?.id
                    : item?.sender === user?.id
                }
              />
            ) : null}
          </React.Fragment>
        ))}

        {isTyping ? <HomeChatScreenIsTyping /> : null}
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
};

export default HomeChatScreenMessages;
