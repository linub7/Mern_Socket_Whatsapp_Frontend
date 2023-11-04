import HomeChatScreenCallVideoStreamsUserVideo from './user';
import HomeChatScreenCallVideoStreamsMyVideo from './my';

const HomeChatScreenCallVideoStreams = ({
  userVideo,
  myVideo,
  showActions,
}) => {
  return (
    <div>
      <HomeChatScreenCallVideoStreamsUserVideo userVideo={userVideo} />
      <HomeChatScreenCallVideoStreamsMyVideo
        myVideo={myVideo}
        showActions={showActions}
      />
    </div>
  );
};

export default HomeChatScreenCallVideoStreams;
