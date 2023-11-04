import HomeChatScreenCallRinging from './ringing';

const HomeChatScreenCall = ({ call, callAccepted, setCall }) => {
  const { receivingCall, callEnded } = call;
  return (
    <div>
      {receivingCall && !callAccepted && (
        <HomeChatScreenCallRinging call={call} setCall={setCall} />
      )}
    </div>
  );
};

export default HomeChatScreenCall;
