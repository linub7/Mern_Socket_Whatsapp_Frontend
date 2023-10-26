import { useEffect, useRef } from 'react';

import HomeChatScreenMessageItem from './item';
import HomeChatScreenIsTyping from '../is-typing';

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
          <HomeChatScreenMessageItem
            key={index}
            item={item}
            me={item?.sender?.id === user?.id}
          />
        ))}

        {isTyping ? <HomeChatScreenIsTyping /> : null}
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
};

export default HomeChatScreenMessages;
