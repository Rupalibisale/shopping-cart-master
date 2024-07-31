import { data } from "../data";
import Product from "./Product";

const Shop = () => {
  const { products } = data;
  return (
    <div className="shop">
      <h2 className="products">Select Your Products</h2>
      <div className="prod__container">
        {products.map((prod) => {
          return (
            <div key={prod.id}>
              <Product product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
