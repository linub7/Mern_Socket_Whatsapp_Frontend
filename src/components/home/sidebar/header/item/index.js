const HomeSidebarHeaderItem = ({ children, onClick = () => {} }) => {
  return (
    <li>
      <button onClick={onclick} className="btn">
        {children}
      </button>
    </li>
  );
};

export default HomeSidebarHeaderItem;
