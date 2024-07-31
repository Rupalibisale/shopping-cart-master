import { useContext, useState, useEffect } from "react";
import { data } from "../data";
import { ShopContext } from "../context/shop-context";
import CartCardItem from "./CartCardItem";

const Basket = () => {
  const { products } = data;
  const { cartItems } = useContext(ShopContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price when the component renders or cartItems changes
  useEffect(() => {
    let total = 0;
    products.forEach((prod) => {
      if (cartItems[prod._id]) {
        total += prod.price * cartItems[prod._id];
      }
    });
    setTotalPrice(total);
  }, [cartItems, products]);

  return (
    <div className="cart">
      {totalPrice > 0 ? (
        <>
          <h1 style={{ textAlign: "center" }}>Your Cart Items</h1>
          <div className="cart__items">
            {products.map((prod) => {
              if (cartItems[prod._id]) {
                return (
                  <CartCardItem
                    product={prod}
                    key={prod._id}
                    cartItems={cartItems}
                  />
                );
              }
            })}
          </div>
          <div className="saperation"></div>
          <div className="total__price">Total Price: $ {totalPrice}</div>
        </>
      ) : (
        <h1 className="empty__msg">Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Basket;
