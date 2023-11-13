import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Peer from 'simple-peer';

import HomeSideBar from 'components/home/sidebar';
import { setStatusAction } from 'store/slices/status';
import { getConversationsHandler } from 'api/conversations';
import {
  getConversationsAction,
  updateActiveConversationAndItsMessagesAction,
} from 'store/slices/chat';
import HomeWelcomeMessage from 'components/home/welcome';
import HomeChatScreen from 'components/home/chat';
import SocketContext from 'context/SocketContext';
import HomeChatScreenCall from 'components/home/chat/call';
import {
  getConversationId,
  getConversationName,
  getConversationPicture,
  getImage,
} from 'utils/helper';

const callData = {
  socketId: '',
  receivingCall: false,
  callEnded: false,
  name: '',
  picture: '',
  signal: '',
};

const Home = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [call, setCall] = useState(callData);
  const [callAccepted, setCallAccepted] = useState(false);
  const [stream, setStream] = useState();

  const myVideo = useRef();
  const userVideo = useRef();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const socket = useContext(SocketContext);

  // join user into the socket io
  useEffect(() => {
    socket.emit('join', user?.id);
    // get online users
    socket.on('get-online-users', (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // call
  useEffect(() => {
    // handleSetupMedia();

    socket.on('setup-socket', (socketId) => setCall({ ...call, socketId }));

    socket.on('call-user', (data) => {
      console.log('call-user data', data);
      setCall({
        ...call,
        socketId: data?.from,
        name: data?.name,
        picture: getImage(data?.picture),
        signal: data?.signal,
        receivingCall: true,
      });
    });

    return () => {};
  }, [call]);

  // get conversations
  useEffect(() => {
    if (user?.token) handleGetConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    socket.on('receive-message', (message) => {
      dispatch(updateActiveConversationAndItsMessagesAction(message));
    });

    // listening to typing and stop-typing
    socket.on('typing', () => setIsTyping(true));
    socket.on('stop-typing', () => setIsTyping(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetConversations = async () => {
    dispatch(setStatusAction('loading'));
    const { err, data } = await getConversationsHandler(user?.token);
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    dispatch(setStatusAction('done'));
    dispatch(getConversationsAction(data?.data?.data));
  };

  // const handleSetupMedia = () =>
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: true })
  //     .then((stream) => {
  //       setStream(stream);
  //       // myVideo.current.srcObject = stream;
  //     });

  // const handleEnableMedia = () => {
  //   myVideo.current.srcObject = stream;
  // };

  // const handleCallUser = () => {
  //   handleEnableMedia();
  //   setCall({
  //     ...call,
  //     name: getConversationName(user, activeConversation?.users),
  //     picture: getConversationPicture(user, activeConversation?.users),
  //   });
  //   const peer = new Peer({
  //     initiator: true,
  //     trickle: false,
  //     stream,
  //   });

  //   peer.on('signal', (data) => {
  //     socket.emit('call-user', {
  //       userToCall: getConversationId(user, activeConversation?.users),
  //       signal: data,
  //       from: call?.socketId,
  //       name: user?.name,
  //       picture: user?.picture?.url,
  //     });
  //   });
  // };

  return (
    <>
      <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center pt-[19px] overflow-hidden">
        <div className="container h-screen flex">
          <HomeSideBar onlineUsers={onlineUsers} />
          {activeConversation?._id ? (
            <HomeChatScreen
              onlineUsers={onlineUsers}
              isTyping={isTyping}
              setIsTyping={setIsTyping}
              handleCallUser={() => {}}
            />
          ) : (
            <HomeWelcomeMessage />
          )}
        </div>
      </div>
      {/* <HomeChatScreenCall
        call={call}
        setCall={setCall}
        callAccepted={callAccepted}
        userVideo={userVideo}
        myVideo={myVideo}
        stream={stream}
      /> */}
    </>
  );
};

export default Home;
