import styles from "./Counter.module.scss";

export const Counter = ({ negatives = false, countChange, value }) => {
    return (
        <>
            <button
                className={styles.button}
                onClick={() => {
                    if (!negatives && value === 1) {
                        return;
                    }
                    countChange(value - 1);
                }}
            >
                {" "}
                -
            </button>
            <div className={styles.button__value}>{value}</div>
            <button
                className={styles.button}
                onClick={() => countChange(value + 1)}
            >
                +
            </button>
        </>
    );
};

export default Counter;
