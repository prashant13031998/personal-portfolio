import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Personal Projects</h1>
        <p className="pl-desc">
          I have used modern web development methodologies in order to build
          these projects which includes MERN stack.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => {
          return <Product key={item.id} img={item.img} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
