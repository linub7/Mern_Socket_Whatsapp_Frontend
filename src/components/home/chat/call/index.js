import HomeChatScreenCallHeader from './header';
import HomeChatScreenCallRinging from './ringing';

const HomeChatScreenCall = ({ call, callAccepted, setCall }) => {
  const { receivingCall, callEnded } = call;
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg`}
    >
      <div>
        <div>
          <HomeChatScreenCallHeader />
        </div>
      </div>
      {receivingCall && !callAccepted && (
        <HomeChatScreenCallRinging call={call} setCall={setCall} />
      )}
    </div>
  );
};

export default HomeChatScreenCall;
