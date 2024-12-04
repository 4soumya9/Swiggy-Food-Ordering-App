import { useState } from "react";
import appLogo from "../Images/appLogo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-pink-100 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={appLogo} alt="App Logo" className="w-16 h-16" />
          <span className="ml-4 text-lg font-semibold hidden sm:block">
            Food Ordering App
          </span>
        </div>

        {/* Navigation */}
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
            <li className="text-sm md:text-base">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="text-sm md:text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm md:text-base">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-sm md:text-base">
              <Link to="/signIn">Sign In</Link>
            </li>
            <li className="text-sm md:text-base font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
