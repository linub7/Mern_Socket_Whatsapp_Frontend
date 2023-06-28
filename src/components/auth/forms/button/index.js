import { useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

const AuthButton = ({ btnTitle }) => {
  const { status } = useSelector((state) => state.status);

  return (
    <button
      className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
      type="submit"
    >
      {status === 'loading' ? <BeatLoader color="#fff" size={16} /> : btnTitle}
    </button>
  );
};

export default AuthButton;
