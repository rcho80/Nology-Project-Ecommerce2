import styles from "./Cart.module.scss";
import { useState, useEffect } from "react";
import { getCartItems, deleteCartItem } from "../../services/cart";

const Cart = ({ deleteCount }) => {
    const [cartItems, setCartItems] = useState([]);
    const [removeId, setRemoveId] = useState();
    const [newCartItem, setNewCartItem] = useState(undefined);

    const getCart = async () => {
        const data = Array.from(await getCartItems());
        setCartItems(data);
    };

    useEffect(() => {
        getCart();
    }, []);

    console.log(cartItems);

    const totalPrice = [];
    const totalQuantity = [];

    for (const { price: p, quantity: q } of cartItems) {
        const getTotals = "price: " + p + ", quantity: " + q;
        console.log(getTotals);
        const prices = totalPrice.push(p * q);
        const quantity = totalQuantity.push(q);
    }

    console.log(totalPrice);

    const reducePrices = (acc, curr) => {
        return acc + curr;
    };

    const cartPrice = totalPrice.reduce(reducePrices, 0);
    console.log(cartPrice);

    const handleCartRemoval = async (id) => {
        await deleteCartItem(id);
        getCart();
    };

    console.log(cartItems.length);
    deleteCount(cartItems.length);

    return (
        <>
            <h2 className={styles.cart__title}>
                The Latest styles and trends for all seasons
            </h2>
            {cartItems.map((item) => (
                <div key={item.id} className={styles.cart}>
                    <div className={styles.cart__words}>
                        <h2 className={styles.cart__words__items}>
                            Name: {item.name}
                        </h2>
                        <h2 className={styles.cart__words__items}>
                            Price: ${item.price}.00
                        </h2>
                        <h2 className={styles.cart__words__items}>
                            Quantity: {item.quantity}
                        </h2>
                        <h2 className={styles.cart__words__items}>
                            Variant: {item.variant}
                        </h2>
                        <h2 className={styles.cart__words__items}>
                            Total Price: ${item.quantity * item.price}.00
                        </h2>
                        <button
                            className={styles.cart__btn}
                            onClick={() => handleCartRemoval(item.id)}
                        >
                            REMOVE
                        </button>
                    </div>
                    <div className={styles.cart__img}>
                        <img
                            className={styles.cart__img__image}
                            src={item.images}
                            alt="#"
                        ></img>
                        <h4 className={styles.cart__productId}>
                            Product ID: {item.productId}
                        </h4>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cart;
