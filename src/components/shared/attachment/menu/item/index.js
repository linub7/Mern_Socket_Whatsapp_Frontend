const AttachmentMenuItem = ({
  onClick = () => {},
  btnStyle = '',
  children,
}) => {
  return (
    <li
      className={`${btnStyle} rounded-full mb-1 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default AttachmentMenuItem;
