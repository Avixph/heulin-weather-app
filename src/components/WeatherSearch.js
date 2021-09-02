import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchIcon } from "@heroicons/react/solid";
import { fetchSearch } from "../redux/weatherSearchSlice";

const WeatherSearch = () => {
  const dispatch = useDispatch();

  const [zipCode, setZipCode] = useState("10039");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setZipCode(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const field = zipCode;
    dispatch(fetchSearch(field));
    if (zipCode.length > 0) {
      dispatch(fetchSearch(zipCode));
    }
  };

  useEffect(() => {
    dispatch(fetchSearch(zipCode));
  }, []);

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center px-4 py-2 md:max-w-2xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"
      >
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search Weather
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              onChange={handleSearchInput}
              className="block w-full bg-grey-50 border border-gray-300 rounded-sm py-2 pl-10 pr-3 text-lg placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-mainBlack focus:ring-1 focus:ring-secondBlue focus:border-secondBlue sm:text-sm"
              placeholder="Search Weather"
              type="search"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default WeatherSearch;
