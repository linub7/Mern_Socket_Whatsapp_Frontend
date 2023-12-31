import { toCapitalize } from 'utils/helper';

const HomeSideBarConversationItemLeftSide = ({
  source,
  name,
  message,
  convName,
  online,
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <div
        className={`relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden ${
          online ? 'online' : ''
        }`}
      >
        <img src={source} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col">
        <h1 className="font-bold flex items-center gap-x-2">
          {toCapitalize(convName)}
        </h1>
        <div>
          <div className="flex items-center gap-x-1 dark:text-dark_text_2">
            <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
              <p>
                {message?.length > 25
                  ? `${message?.substring(0, 25)}...`
                  : message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBarConversationItemLeftSide;
