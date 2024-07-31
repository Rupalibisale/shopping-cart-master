/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartCardItem = ({ product, cartItems }) => {
  const { addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart__item">
      <img src={product.images} alt="product img" />
      <div className="cart__item__desc">
        <p>
          <b>{product.name}</b>
        </p>
        <div className="cart__right">
          <button onClick={() => removeFromCart(product._id)}>-</button>
          <p>{cartItems[product._id]}</p>
          <button onClick={() => addToCart(product._id)}>+</button>
          <span className="cart__prd_price">
            Price&nbsp;:&nbsp;${Math.round(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCardItem;
