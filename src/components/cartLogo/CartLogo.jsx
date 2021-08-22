import { useState, useEffect } from "react";
import cart from "../../IMAGES/cartlogo.png";
import styles from "./CartLogo.module.scss";

const CartLogo = ({ givetoCartLogo }) => {
    console.log(givetoCartLogo);
    return (
        <>
            <div className={styles.cart}>
                <div className={styles.cart__number}> {givetoCartLogo} </div>
                <img
                    className={styles.cart__img}
                    src={cart}
                    alt="cartLogo"
                ></img>
            </div>
        </>
    );
};

export default CartLogo;
