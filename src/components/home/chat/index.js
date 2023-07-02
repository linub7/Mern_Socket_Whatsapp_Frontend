import HomeChatScreenHeader from './header';

const HomeChatScreen = ({ activeConversation }) => {
  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <HomeChatScreenHeader
          name={activeConversation?.name}
          picture={activeConversation?.picture}
        />
      </div>
    </div>
  );
};

export default HomeChatScreen;
