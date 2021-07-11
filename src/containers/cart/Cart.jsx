import styles from "./Cart.module.scss";
import { useState, useEffect } from "react";
import { getCartItems, deleteCartItem } from "../../services/cart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [removeId, setRemoveId] =useState();
  const [newCartItem, setNewCartItem] = useState(undefined);


 const getCart = async () => {
  const data = Array.from(await getCartItems());
  setCartItems(data);
 };

 useEffect(() => {
   getCart();
 }, []);   

  // console.log(cartItems)
 
  // const totalPrice = [];
  // const totalQuantity = [];

  // for (const {price: p, quantity: q} of cartItems) {
  // const getTotals = ('price: ' + p + ', quantity: ' + q);
  // const prices = totalPrice.push(p * q);
  // const quantity = totalQuantity.push(q);
  // }

  // console.log(totalPrice, totalQuantity);
  



  const handleCartRemoval = async (id) => {
    await deleteCartItem(id)
    getCart();
  }

  return (
    <>
      <h2 className={styles.cart__title}>
        The Latest styles and trends for all seasons
      </h2>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cart}>
          <div>
            <h2 className={styles.cart__items}>Name: {item.name}</h2>
            <h2 className={styles.cart__items}>Price: ${item.price}.00</h2>
            <h2 className={styles.cart__items}>Quantity: {item.quantity}</h2>
            <h2 className={styles.cart__items}>Variant: {item.variant}</h2>
            <h2 className={styles.cart__items}>
              Total Price: ${item.quantity * item.price}.00
            </h2>
            <button className={styles.cart__btn}  onClick={() => handleCartRemoval(item.id)}>Delete</button>
          </div>
          <div>
            <img className={styles.cart__img} src={item.images} alt="#"></img>
            <h4 className={styles.cart__productId}>ProductId: {item.productId}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
          
export default Cart;


