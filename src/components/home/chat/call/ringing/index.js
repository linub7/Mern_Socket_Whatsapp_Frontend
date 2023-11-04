import { useEffect, useState } from 'react';

import HomeChatScreenCallRingingContainer from './container';
import HomeChatScreenCallRingingRingtone from './ringtone';
import { WAITING_TIME } from 'constants';

const HomeChatScreenCallRinging = ({ call, setCall }) => {
  const [timer, setTimer] = useState(0);
  let interval;

  useEffect(() => {
    if (timer < WAITING_TIME) {
      handleTimer();
    } else {
      setCall({ ...call, receivingCall: false });
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleTimer = () => {
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div className="dark:bg-dark_bg_1 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
      <HomeChatScreenCallRingingContainer />
      <HomeChatScreenCallRingingRingtone />
    </div>
  );
};

export default HomeChatScreenCallRinging;
