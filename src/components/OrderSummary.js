import { useSelector } from "react-redux";
import { selectItemsInCart, selectTotalPrice } from "../utils/cartSlice";
import { useState } from "react";

const OrderSummary = () => {
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);

  const [showDemoMessage, setShowDemoMessage] = useState(false);

  const handlePlaceOrder = () => {
    setShowDemoMessage(true);
  };

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto p-6 rounded-md border shadow-md bg-white">
      <h2 className="text-2xl font-bold border-b pb-4 text-gray-800">
        Order Summary
      </h2>

      {/* Order Details */}
      <div className="py-4 space-y-4 border-b">
        <div className="flex justify-between items-center text-gray-700">
          {/* <p className="font-medium">Price ({cartItems.length} items)</p> */}
          <p className="font-medium">Price </p>
          <p className="font-semibold">₹ {totalPrice}</p>
        </div>
      </div>

      {/* Total Amount */}
      <div className="py-4 border-b">
        <div className="flex justify-between items-center text-lg font-bold">
          <h1>Total Amount</h1>
          <h1 className="text-orange-500">₹ {totalPrice}</h1>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-md uppercase transition-all"
      >
        Place order
      </button>

      {/* Demo Message */}
      {showDemoMessage && (
        <div className="mt-4 text-center text-red-600 font-semibold">
          This is a demo app. Your order will not be processed.
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
