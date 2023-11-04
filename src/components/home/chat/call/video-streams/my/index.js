const HomeChatScreenCallVideoStreamsMyVideo = ({ myVideo, showActions }) => {
  return (
    <div>
      <video
        ref={myVideo}
        muted
        autoPlay
        className={`smallVideoCall ${showActions ? 'moveVideoCall' : ''}`}
      ></video>
    </div>
  );
};

export default HomeChatScreenCallVideoStreamsMyVideo;
