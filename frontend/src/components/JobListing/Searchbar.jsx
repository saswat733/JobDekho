import React, { useState, useEffect } from "react";

const Searchbar = ({ setSearch, setLocation }) => {
  const [location, setlocation] = useState([]);
  const [LocationQuery, setLocationQuery] = useState("");
  const [isSearching, setisSearching] = useState(false);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getLocations = async () => {
    if (LocationQuery) {
    }
  };

  return (
    <div className="border-2 rounded-lg m-4 p-3 text-gray-500 text-lg flex flex-col gap-8 ">
      {/* first */}
      <div className="flex gap-4 items-center justify-left">
        <div className="">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="w-full ">
          <input
            className="w-full h-8 text-gray-800 bg-white focus:outline-none  focus:ring-0 rounded border-none "
            type="text"
            name="search"
            placeholder="Serach job title or keyword"
          />
        </div>
      </div>

      {/* second */}
      <div className="flex gap-4 items-center justify-left">
        <div className="">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div className="w-full ">
          <input
            className="w-full h-8 text-gray-800 bg-white focus:outline-none  focus:ring-0 rounded border-none "
            type="text"
            name="location"
            placeholder="Preferred Location"
          />
        </div>
      </div>

      <div className="">
        <button
          className="bg-green-600 text-white font-medium rounded-lg py-2.5 px-7 lg:w-8/12 w-full"
          
        >
          Find jobs
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
