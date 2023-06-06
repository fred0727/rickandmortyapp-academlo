import React from "react";

const ListSearch = ({ locationSearch, searchLocation }) => {
  const handleSelect = (e) => {
    searchLocation(e.target.value);
  };
  return (
    <div className="flex">
      <ul
        id=""
        className="list-ul w-full max-h-[200px] sm:max-h-[250px] overflow-y-auto bg-opac-bg border-r-2 border-l-2 border-b-2 border-primary-green ps-2 pt-2"
      >
        {locationSearch?.map((location) => (
          <div
            key={location.id}
            className="flex flex-col justify-center sm:py-1"
          >
            <input
              id={`check${location?.id}`}
              className="hidden"
              onClick={handleSelect}
              type="checkbox"
              value={location?.name}
            />
            <label
              className="cursor-pointer text-sm whitespace-nowrap overflow-x-hidden overflow-ellipsis sm:text-xl"
              htmlFor={`check${location?.id}`}
            >
              {location?.name}
            </label>
            <div className="bg-green-950 h-[.1px] w-full my-1"></div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListSearch;
