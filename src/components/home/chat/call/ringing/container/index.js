import HomeChatScreenCallRingingContainerInfos from './infos';
import HomeChatScreenCallRingingContainerAction from './action';

const HomeChatScreenCallRingingContainer = () => {
  return (
    <div className="p-4 flex justify-between items-center gap-x-8 ">
      <HomeChatScreenCallRingingContainerInfos />
      <HomeChatScreenCallRingingContainerAction />
    </div>
  );
};

export default HomeChatScreenCallRingingContainer;
