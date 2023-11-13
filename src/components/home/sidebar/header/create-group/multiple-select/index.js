import Select from 'react-select';

const HomeSidebarHeaderCreateGroupMultipleSelect = ({
  options,
  onChange,
  onKeyDown = () => {},
}) => {
  return (
    <div className="mt-4">
      <Select
        options={options}
        onChange={onChange}
        onKeyDown={(e) => onKeyDown(e)}
        placeholder="Search, select users..."
        isMulti
        formatOptionLabel={(user) => (
          <div className="flex items-center gap-1">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-[#222]">{user?.label}</span>
          </div>
        )}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: 'none',
            borderColor: 'transparent',
            background: 'transparent',
          }),
        }}
      />
    </div>
  );
};

export default HomeSidebarHeaderCreateGroupMultipleSelect;
