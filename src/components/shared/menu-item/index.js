const HomeMenuItem = ({
  children,
  onClick = () => {},
  className = '',
  btnStyle = '',
  type = 'button',
}) => {
  return (
    <li className={`${className}`}>
      <button onClick={onClick} className={`btn ${btnStyle}`} type={type}>
        {children}
      </button>
    </li>
  );
};

export default HomeMenuItem;
