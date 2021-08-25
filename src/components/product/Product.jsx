import styles from "./Product.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";
import { getCartItems, addCartItems } from "../../services/cart";
import { Variants } from "../variants/Variants";
import { Counter } from "../../components/counter/Counter";

const Product = ({ start = 1, cartCount }) => {
    const { id } = useParams();
    const [count, setCount] = useState(start);
    const [product, setProduct] = useState(undefined);
    const [cart, setCart] = useState([]);
    const [variant, setVariant] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        getData();
    }, [id]);

    const getCartData = async () => {
        const data = await getCartItems();
        setCart(data);
    };

    useEffect(() => {
        getCartData();
    }, []);

    // const cartDuplicates = (product) => {
    //   cart.productId === product.productId ? setAddToCart(product) : return false;
    // }

    const grabVariant = (value) => {
        setVariant(value);
    };

    const handleCreate = async (newCartProduct) => {
        if (variant === null) {
            return false;
        }
        newCartProduct.quantity = count;
        newCartProduct.variant = variant;
        const { id, ...newRecord } = newCartProduct;
        await addCartItems(newRecord);
        getCartData();
    };
    console.log(cart.length);
    cartCount(cart.length);

    return (
        <div className={styles.container}>
            <h2 className={styles.box__title}>
                The Latest styles and trends for all seasons
            </h2>
            {product ? (
                <div className={styles.box}>
                    <section className={styles.box__section}>
                        <img
                            className={styles.box__img}
                            src={product.images}
                            alt="#"
                        ></img>
                        <div>
                            <img
                                className={styles.box__img__small}
                                src={product.images}
                                alt="#"
                            ></img>
                            <img
                                className={styles.box__img__small}
                                src={product.images}
                                alt="#"
                            ></img>
                            <img
                                className={styles.box__img__small}
                                src={product.images}
                                alt="#"
                            ></img>
                            <img
                                className={styles.box__img__small}
                                src={product.images}
                                alt="#"
                            ></img>
                        </div>
                    </section>
                    <section className={styles.box__card}>
                        <h2 className={styles.box__card__items}>
                            Name: &nbsp;&nbsp;&nbsp; {product.name}
                        </h2>
                        <h2 className={styles.box__card__items}>
                            Price: &nbsp;&nbsp;&nbsp;&nbsp; ${product.price}
                        </h2>
                        <div className={styles.box__card__variants}>
                            <h2 className={styles.box__card__items}>
                                Variant: &nbsp;&nbsp;
                            </h2>
                            <span>
                                <Variants
                                    product={product}
                                    getfromvariant={grabVariant}
                                />
                            </span>
                        </div>

                        <div className={styles.box__btn}>
                            <div className={styles.box__btn__align}>
                                <div className={styles.box__btn__boxes}>
                                    <Counter
                                        value={count}
                                        countChange={setCount}
                                    />
                                </div>
                                <div className={styles.box__btn__boxes}>
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
                        </div>
                        <h4 className={styles.box__prodId}>
                            Product ID: {product.productId}
                        </h4>
                    </section>
                </div>
            ) : (
                <h3>
                    Product with id = {">"} {id} does not exist
                </h3>
            )}
        </div>
    );
};

export default Product;
