import { Link } from 'react-router-dom';

const AuthLink = ({ span, path, link }) => {
  return (
    <p className="flex flex-col items-center justify-center mt-10 text-center text-base dark:text-dark_text_1">
      <span>{span}</span>
      <Link
        to={path}
        className="hover:underline cursor-pointer transition ease-in duration-300"
      >
        {link}
      </Link>
    </p>
  );
};

export default AuthLink;
