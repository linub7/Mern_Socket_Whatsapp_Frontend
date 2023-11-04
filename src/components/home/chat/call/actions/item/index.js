const HomeChatScreenCallActionsItem = ({ className, children }) => {
  return (
    <li>
      <button className={`btn_secondary ${className}`}>{children}</button>
    </li>
  );
};

export default HomeChatScreenCallActionsItem;
