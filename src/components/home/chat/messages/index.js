import { useEffect, useRef } from 'react';

import HomeChatScreenMessageItem from './item';

const HomeChatScreenMessages = ({ messages, user }) => {
  const endRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
};

export default HomeChatScreenMessages;
