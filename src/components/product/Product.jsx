import styles from "./Product.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct  } from "../../services/products";
import { getCartItems, addCartItems } from "../../services/cart";

const Product = ({ getId, start = 0, negatives = false }) => {
  const { id } = useParams();
  const [count, setCount] = useState(start);
  const [counter, setCounter] = useState(0);
  // const [products, setProducts] = useState();
  const [product, setProduct] = useState(undefined);
  const [cart, setCart] = useState([]); 
  const [variant, setVariant] = useState(null);
  
 
  useEffect(() => {
    const getData = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };
    getData();
  }, []);


  const getCartData = async () => {
      const data = await getCartItems();
        setCart(data);
      };

  useEffect(() => {
         getCartData();
  }, []);      
  

  const handleCreate = async (newCartProduct) => {
    newCartProduct.quantity = count;
    newCartProduct.variant = variant;
    const { id, ...newRecord } = newCartProduct;
    await addCartItems(newRecord);
    getCartData();
  }   

  const handleDecrement = () => {
    if (!negatives && count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleVariant = (e) => {
      setVariant(e.target.value)
  }

  const handleTally = () => {
    console.log(count + 1)
  }
  
  return (
    <>
      <h2 className={styles.box__title}>
        The Latest styles and trends for all seasons
      </h2>
      {product ? (
        <div className={styles.box}>
          <section>
            <h2 className={styles.box__card__items}>Name: {product.name}</h2>
            <h2 className={styles.box__card__items}>Price: ${product.price}</h2>
              <h2 className={styles.box__card__items}>
                Variant:  {""}
                <select name="variants" id="variants " onChange={handleVariant}>
                  {product.variants.map((variant, index) => (
                    <option key={index} value={variant}>
                      {variant}
                    </option>
                  ))}
                </select>
              </h2>
            <div className={styles.box__btn}>
              <div className={styles.box__btn__align}>
                <button
                  className={styles.box__btn__click}
                  onClick={handleDecrement}
                >
                  -
                </button>
                <div className={styles.box__btn__click__count}>{count}</div>
                <button
                  className={styles.box__btn__click}
                  onClick={handleIncrement}
                >
                  +
                </button>
                <button
                  className={styles.box__btn__add}
                  onClick={() => {
                    handleCreate(product);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
          <section>
            <img 
              className={styles.box__img}
              src={product.images}
              alt="#"
            ></img>
            <h4>Product ID: {product.productId}</h4>
          </section>
        </div>
      ) : (
        <h3>
          Product with id = {">"} {id} does not exist
        </h3>
      )}
    </>
  );
}


     
export default Product;

