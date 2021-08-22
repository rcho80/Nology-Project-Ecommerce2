import { useState, useEffect } from "react";
import styles from "./Variants.module.scss";

export const Variants = ({ product, getfromvariant }) => {
    const [getVariant, setGetVariant] = useState(null);

    const handleVariant = (event) => {
        event.target.checked
            ? setGetVariant(event.target.value)
            : setGetVariant(null);
    };

    useEffect(() => {
        getfromvariant(getVariant);
    });

    return (
        <div onChange={handleVariant}>
            <label className={styles.label}>{product.variants[0]}</label>
            <input
                className={styles.input}
                id={product.value}
                type="radio"
                value={product.variants[0]}
                name={product}
            />
            <label className={styles.label}>{product.variants[1]}</label>
            <input
                className={styles.input}
                id={product.value}
                type="radio"
                value={product.variants[1]}
                name={product}
            />
            <label className={styles.label}>{product.variants[2]}</label>
            <input
                className={styles.input}
                id={product.value}
                type="radio"
                value={product.variants[2]}
                name={product}
            />
        </div>
    );
};

export default Variants;
