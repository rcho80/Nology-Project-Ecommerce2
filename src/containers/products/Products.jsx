import Product from "../../components/product/Product";
import {
  getProducts
} from "../../services/products";
import { useState, useEffect } from "react";
import {
  getCartItems,
  updateCartItems,
  createCartItems,
  deleteCartItems
} from "../../services/cart";
import styles from "./Products.module.scss";
import { Link, useLocation } from "react-router-dom";


const Products = () => {
const [products, setProducts] = useState([]);
// const [cart, setCart] = useState([]);

//  const getCart = async () => {
//    const data = await getCartItems();
//    setCart(data);
//  };

// useEffect(() => {
//   getCart();
// }, []);

// const handleCreate = async (add) => {
//   await createCartItems(add);
//   getCart();
// };


const getProductList = async () => {
  const data = await getProducts();
  setProducts(data);
};

useEffect(() => {
  getProductList();
}, []);

  return (
    <div className={styles.products}>
      <h2 className={styles.products__title}>
        The Latest styles and trends for all seasons
      </h2>
      {products.map((product) => (
        <div key={product.id}>
         {console.log(product.images)}      
          <Link to={`/products/${product.id}`}>
            <Product />
          </Link>
        </div>
      ))}
    </div>
  );
    
};

export default Products;
