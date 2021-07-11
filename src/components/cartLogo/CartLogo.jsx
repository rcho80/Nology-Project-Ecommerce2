import { useState, useEffect } from "react";
import cart from "../../IMAGES/cartlogo.png"
import styles from "./CartLogo.module.scss"
import { FaTimes } from 'react-icons/fa';

const CartLogo = ({quantity}) => {

  return  (
    <> 
     <img className={styles.cart__img} src={cart} alt="cartLogo"></img>  
    </>
  )
}

export default CartLogo;