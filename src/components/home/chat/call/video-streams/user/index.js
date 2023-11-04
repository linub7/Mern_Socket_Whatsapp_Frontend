const HomeChatScreenCallVideoStreamsUserVideo = ({ userVideo }) => {
  return (
    <div>
      <video
        ref={userVideo}
        playsInline
        muted
        autoPlay
        className="largeVideoCall"
      ></video>
    </div>
  );
};

export default HomeChatScreenCallVideoStreamsUserVideo;
