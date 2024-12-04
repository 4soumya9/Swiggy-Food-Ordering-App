import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  console.log(data);

  const handleClick = () => {
    setShowIndex(); // Toggle the visibility of items
  };

  return (
    <div className="w-full max-w-md mx-auto my-4">
      {/* Header */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl">⬇️</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
