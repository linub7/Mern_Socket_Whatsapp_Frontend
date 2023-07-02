const HomeMenuItem = ({
  children,
  onClick = () => {},
  className = '',
  btnStyle = '',
}) => {
  return (
    <li className={`${className}`}>
      <button onClick={onClick} className={`btn ${btnStyle}`}>
        {children}
      </button>
    </li>
  );
};

export default HomeMenuItem;
