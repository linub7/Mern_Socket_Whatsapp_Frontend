const HomeSidebarHeaderMenuItem = ({ title, onClick = () => {} }) => {
  return (
    <li
      className="py-3 pl-5 cursor-pointer hover:bg-dark_bg_3 flex justify-start"
      onClick={onClick}
    >
      <span>{title}</span>
    </li>
  );
};

export default HomeSidebarHeaderMenuItem;
