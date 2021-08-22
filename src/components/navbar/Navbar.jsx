import styles from "./Navbar.module.scss";
import CartLogo from "../cartLogo/CartLogo";
import { useState, useEffect } from "react";
import { ImHome } from "react-icons/im";
import { getCartItems } from "../../services/cart";
import { getProduct, getProducts } from "../../services/products";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ givetoCart }) => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState();
    const [tally, setTally] = useState(givetoCart);
    const [products, setProducts] = useState([]);
    // const query = useQuery();
    const [routeID, setRouteID] = useState();

    const getCart = async () => {
        const data = Array.from(await getCartItems());
        setCartItems(data);
    };

    useEffect(() => {
        getCart();
    }, []);

    console.log(givetoCart);

    return (
        <header className={styles.header}>
            <div className={styles.header__topLine}>
                <div className={styles.homeLogo}>
                    {location.pathname !== "/" ? (
                        <Link to="/">
                            <ImHome color="black" />
                        </Link>
                    ) : null}
                </div>
                <h1 className={styles.header__title}>
                    <Link to="/">CHOICE</Link>
                </h1>
                <div className={styles.header__cartLogo}>
                    <Link to="/cart">
                        <CartLogo givetoCartLogo={givetoCart} />
                    </Link>
                </div>
            </div>
            <nav className={styles.header__ul}>
                <Link
                    to={`/product/am7rT0lMniiFZ35KWCxv`}
                    className={styles.header__li}
                >
                    SHIRTS
                </Link>
                <Link
                    to={`/product/NWSx0cTugJeG3Q0NXVR7`}
                    className={styles.header__li}
                >
                    SUITS
                </Link>
                <Link
                    to={`/product/OjSFQ8KzrCoHeYpgshIx`}
                    className={styles.header__li}
                >
                    TIES
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
