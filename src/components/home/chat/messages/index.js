import HomeChatScreenMessageItem from './item';

const HomeChatScreenMessages = ({ messages, user }) => {
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
      </div>
    </div>
  );
};

export default HomeChatScreenMessages;
