/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[product._id];
  return (
    <div className="each__prod_cont">
      <img src={product.images} alt="Image" />
      <h4>{product.name}</h4>
      <span>Price : ${product.price}</span>
      <button onClick={() => addToCart(product._id)}>
        Add to Cart {cartItemAmount && `( ${cartItemAmount} )`}
      </button>
    </div>
  );
};

export default Product;
