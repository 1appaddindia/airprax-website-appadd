import React, { useState } from "react";

const Header = () => {
  const [locationDropDown, setLocationDropDown] = useState(false);
  const [searchPlaces, setSearchPlaces] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [data] = useState([
    "Bangalore",
    "Shimoga",
    "Hosur",
    "Kolar",
    "Ramnagara",
    "Tumkur",
    "Raichur",
    "Mangalore",
    "Madavara",
    "Udupi",
    "Doddaballpur",
    "Hassan",
    "Bellary",
    "Dharwad",
    "Vijayapura",
    "Davanagere",
  ]);

  const handleOpenDropDown = () => {
    setLocationDropDown(!locationDropDown);
  };

  const handleSearchChange = (e) => {
    setSearchPlaces(e.target.value);
  };

  const handleLocation = (place) => {
    setSelectedPlace(place);
    setLocationDropDown(!locationDropDown);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchPlaces.toLowerCase())
  );
  return (
    <div className="bg-[#0F75BC] w-full p-2 flex items-center justify-end gap-3 relative">
      <img
        src="/images/flaticons/location-header.png"
        alt=""
        className="h-6 w-6"
      />
      <span className="text-white">{selectedPlace}</span>
      <div className="flex flex-col">
        <img
          src="/images/flaticons/down.png"
          alt=""
          className="h-7 w-7 cursor-pointer"
          onClick={handleOpenDropDown}
        />
        {locationDropDown && (
          <div className="bg-white h-fit w-fit p-5 rounded-md absolute top-10 right-80 z-50 shadow-xl">
            <div className="w-fit flex flex-col gap-3">
              <span className="font-semibold">
                Select location from below
                <button
                  className="ml-8 bg-[#BF1E2E] text-white
                        border-none  rounded-full w-6"
                  onClick={handleOpenDropDown}
                >
                  X
                </button>
              </span>
              <div className="p-1">
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchPlaces}
                  onChange={handleSearchChange}
                  className="mb-4 p-2 border border-gray-300 text-sm rounded-md w-full"
                />
                <div className="w-full flex flex-col h-52 overflow-y-scroll custom-scrollbar p-1 border border-gray-300 rounded-md">
                  {filteredData.map((place, i) => (
                    <div
                      key={i}
                      className="p-2 cursor-pointer hover:bg-slate-100 rounded-md"
                      onClick={() => handleLocation(place)}
                    >
                      <span className="text-sm">{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <img src="/images/flaticons/mail.png" alt="" className="h-6 w-6" />
      <a href="" className="text-white">
        sales@airprax.com
      </a>
      <img
        src="/images/flaticons/telephone-call.png"
        alt=""
        className="h-6 w-6"
      />
      <a href="tel:+91 9620602000" className="text-white">
        +91 9620602000
      </a>
    </div>
  );
};

export default Header;
