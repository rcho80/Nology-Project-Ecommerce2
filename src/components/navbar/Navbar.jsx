import styles from "./Navbar.module.scss";
import CartLogo from "../cartLogo/CartLogo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ImHome } from "react-icons/im";

const Navbar = ({addTally}) => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState();

  return (
    <>    
      <header className={styles.header}>
        <div className={styles.header__topLine}>
              <div className={styles.homeLogo}>
    {location.pathname !== "/" ? <Link to="/"><ImHome color="black"/></Link> : null}
     </div>
          <h1 className={styles.header__title}>
            <Link to="/">CHOICE</Link>
          </h1>
          <div className={styles.header__cartLogo}>
            <Link to="/cart">
              {" "}
              <CartLogo />{" "}
            </Link>
          </div>
        </div>
        <nav>
          <ul className={styles.header__ul}>
            <li className={styles.header__li}>
              <Link to="/">SHIRTS</Link>
            </li>
            <li className={styles.header__li}>
              <Link to="/">SUITS</Link>
            </li>
            <li className={styles.header__li}>
              <Link to="/">SHOES</Link>
            </li>
            <li className={styles.header__li}>
              <Link to="/">SALE</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;