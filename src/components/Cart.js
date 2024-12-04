import { useSelector } from "react-redux";
import CartItemList from "../components/CartItemList";
import OrderSummary from "../components/OrderSummary";
import { selectItemsInCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className="container mx-auto px-4 py-8 pb-16">
      <h1 className="text-2xl my-4 font-semibold">Cart</h1>

      {/* Cart Details */}
      <div className="min-h-[60vh] pb-8 grid gap-8 md:grid-cols-3">
        {/* Cart Items */}
        <div className="col-span-2">
          <CartItemList />
        </div>

        {/* Order Summary */}
        {cartItems && cartItems.length !== 0 && (
          <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
