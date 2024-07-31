import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, current) => acc + current,
    0
  );
  return (
    <div className="header">
      <a onClick={() => navigate("/")} className="head__title">
        Shopping Cart
      </a>
      <div className="header__cart">
        <Link to="/">Shop</Link>
        <span onClick={() => navigate("/cart")}>
          <IconContext.Provider value={{ className: "cart__icon" }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          <p>| {totalQuantity}</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
