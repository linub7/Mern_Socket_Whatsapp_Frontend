import { useState } from 'react';

import HomeChatScreenCallActions from './actions';
import HomeChatScreenCallArea from './area';
import HomeChatScreenCallHeader from './header';
import HomeChatScreenCallRinging from './ringing';
import HomeChatScreenCallVideoStreams from './video-streams';

const HomeChatScreenCall = ({
  call,
  callAccepted,
  setCall,
  myVideo,
  userVideo,
  stream,
}) => {
  const [showActions, setShowActions] = useState(false);

  const { receivingCall, callEnded } = call;

  const handleShowActions = () => setShowActions(true);
  const handleHideActions = () => setShowActions(false);
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg`}
      onMouseOver={handleShowActions}
      onMouseOut={handleHideActions}
    >
      <div>
        <div>
          <HomeChatScreenCallHeader />
          <HomeChatScreenCallArea name={'Mehrdad'} />
          {showActions && <HomeChatScreenCallActions />}
        </div>
        <HomeChatScreenCallVideoStreams
          myVideo={myVideo}
          userVideo={userVideo}
          showActions={showActions}
        />
      </div>
      {receivingCall && !callAccepted && (
        <HomeChatScreenCallRinging call={call} setCall={setCall} />
      )}
    </div>
  );
};

export default HomeChatScreenCall;
