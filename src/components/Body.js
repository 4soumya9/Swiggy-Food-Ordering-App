import { useEffect, useState } from "react";
import React from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { API_KEY } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  const [theme] = React.useState(localStorage.getItem("theme") || "light");

  const RestaurantOpenCard = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const EDUCORS_URL = "https://educorssolver.host/api/getData";
  const Target =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    const response = await fetch(
      `${EDUCORS_URL}?ApiKey=${API_KEY}&Target=${encodeURIComponent(Target)}`
    );
    const json = await response.json();
    console.log(json);

    setListOfRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredResList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1 className="text-center mt-10 text-red-500">Looks like you are offline</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={`${theme === "dark" ? "dark-mode bg-gray-100 text-white" : "bg-gray-100 text-black"}`}>
      <div className="container mx-auto p-4">
        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <div className="search flex flex-col sm:flex-row items-center gap-4 w-full">
            <input
              type="text"
              className="border border-solid border-black rounded-lg p-2 flex-1"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={() => {
                const filteredRes = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResList(filteredRes);
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-x-6 md:gap-x-4 sm:gap-x-2 gap-y-6"> */}
          {filteredResList?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="block"
            >
              {restaurant.info.isOpen ? (
                <RestaurantOpenCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
