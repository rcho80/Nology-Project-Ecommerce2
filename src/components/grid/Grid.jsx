import styles from "./Grid.module.scss";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/products";
import { useState, useEffect } from "react";

const Grid = () => {
    const [products, setProducts] = useState([]);

    const getProductList = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.grid__product}>
                    <Link to={`/product/${product.id}`}>
                        <img
                            className={styles.grid__product__img}
                            src={product.images}
                            alt="#"
                        ></img>
                    </Link>
                    <h3 className={styles.grid__product__text}>
                        {product.name}
                    </h3>
                    <h3 className={styles.grid__product__text}>
                        ${product.price}.00
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Grid;
