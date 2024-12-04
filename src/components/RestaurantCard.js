import { useState } from "react";
import { FOOD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, sla, cuisines, avgRating } =
    resData?.info;

  return (
    <div className={theme === "dark" ? "dark-mode" : ""}>
      {/* <div className="m-4 p-3 w-full max-w-sm bg-orange-300 rounded-lg hover:bg-orange-600 cursor-pointer transition-all sm:w-[300px] md:w-[350px] lg:w-[400px] border-2 border-gray-400 hover:border-orange-500 "> */}
      <div className="m-4 p-3 bg-orange-300 rounded-lg hover:bg-orange-600 cursor-pointer transition-all max-w-full w-full">
        <img
          className="rounded-lg h-56 md:h-64 lg:h-72 w-full object-cover"
          src={FOOD_LOGO + cloudinaryImageId}
          alt={name}
        />
        <h3 className="font-bold text-lg md:text-xl py-3 text-gray-800">
          {name}
        </h3>
        <h4 className="text-sm md:text-base text-gray-700">{cuisines.join(", ")}</h4>
        <h4 className="text-sm md:text-base my-2 text-gray-700">{avgRating} stars</h4>
        <h4 className="text-sm md:text-base my-2 text-gray-700">{costForTwo}</h4>
        <h4 className="text-sm md:text-base text-gray-700">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-700 text-white text-xs md:text-sm lg:text-base m-2 p-1 md:p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
