import React from "react";
import { FOOD_LOGO } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-col gap-4">
      {items?.map((item) => {
        const itemPrice =
          item?.card?.info?.price || item?.card?.info?.defaultPrice;

        return (
          <div
            key={item.card.info.id}
            className="w-full p-4 border border-gray-200 rounded-md shadow-sm flex flex-col"
          >
            
            {/* Item Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item?.card?.info?.name}</h2>
              <p className="text-sm text-gray-600">
                {item?.card?.info?.description?.length > 50
                  ? item?.card?.info?.description.slice(0, 500) + "..."
                  : item?.card?.info?.description}
              </p>
              <p className="text-base font-bold mt-2">₹{itemPrice / 100}</p>
            </div>

            {/* Image */}
            <div className="my-4">
              <img
                src={FOOD_LOGO + item?.card?.info?.imageId}
                className="w-full h-40 object-cover rounded-md"
                alt={item?.card?.info?.name}
              />
            </div>

            {/* Add to Cart Button */}
            <div>
              <button
                onClick={() => handleAddItem({ ...item, itemPrice })}
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-900 transition cursor-pointer"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
