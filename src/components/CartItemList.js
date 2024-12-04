import { useDispatch, useSelector } from "react-redux";
import { FOOD_LOGO } from "../utils/constants";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../utils/cartSlice";

const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  if (cartItems.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <ul className="m-4 space-y-6">
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center max-w-full md:max-w-[600px]"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                className="w-full h-32 md:h-auto object-cover block rounded-md"
                src={FOOD_LOGO + item?.item?.card?.info?.imageId}
                alt={item?.item?.card?.info?.name}
              />
            </div>

            {/* Details Section */}
            <div className="flex-1">
              <p className="text-lg font-semibold">{item?.item?.card?.info?.name}</p>

              <p className="hidden md:block text-gray-700">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 text-sm">
                <span className="font-semibold">
                  ₹{(item?.quantity * item?.item?.itemPrice) / 100}
                </span>{" "}
                <span className="text-gray-500">
                  ({item?.item?.itemPrice / 100} × {item?.quantity})
                </span>
              </p>

              {/* Actions Section */}
              <div className="flex justify-between items-center mt-4">
                {/* Quantity Control */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className="bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                  >
                    -
                  </button>
                  <p className="font-bold text-center w-8">{item?.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item?.item?.card?.info?.id)}
                  className="border border-orange-500 text-xs font-semibold text-orange-500 py-1 px-4 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItemList;
