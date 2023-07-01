import HomeSideBarSearchResultItem from './item';

const HomeSideBarSearchResult = ({ searchResult }) => {
  return (
    <div className="w-full conversations custom-scrollbar">
      <div className="flex flex-col px-8 pt-8">
        <h1 className="font-extralight text-base text-green_2">Contacts</h1>
        <span className="w-full mt-4 ml-10 border-b dark:border-b-dark_border_1"></span>
      </div>
      <ul>
        {searchResult?.map((item, index) => (
          <HomeSideBarSearchResultItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HomeSideBarSearchResult;
