import {
  ArrowIcon,
  CallIcon,
  MuteIcon,
  SpeakerIcon,
  VideoIcon,
} from 'assets/svg';
import HomeChatScreenCallActionsItem from './item';

const HomeChatScreenCallActions = () => {
  return (
    <div className="h-22 w-full absolute bottom-0 z-40 px-1">
      <div className="relative bg-[#222] px-4 pt-6 pb-12 rounded-xl">
        <button className="-rotate-90 scale-y-[300%] absolute top-1 left-1/2">
          <ArrowIcon className={'fill-dark_svg_2'} />
        </button>

        <ul className="flex items-center justify-between">
          <HomeChatScreenCallActionsItem>
            <SpeakerIcon color={'white'} />
          </HomeChatScreenCallActionsItem>
          <HomeChatScreenCallActionsItem>
            <VideoIcon color={'white'} />
          </HomeChatScreenCallActionsItem>
          <HomeChatScreenCallActionsItem>
            <MuteIcon className={'fill-white'} />
          </HomeChatScreenCallActionsItem>
          <HomeChatScreenCallActionsItem className={'bg-red-600'}>
            <CallIcon className={'fill-white'} />
          </HomeChatScreenCallActionsItem>
        </ul>
      </div>
    </div>
  );
};

export default HomeChatScreenCallActions;
