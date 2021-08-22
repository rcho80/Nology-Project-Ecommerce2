import styles from "./Messages.module.scss";

const Messages = () => {
    return (
        <>
            <div className={styles.messages}>
                <h3 className={styles.messages__title}>
                    Free Shipping, Returns & Exchanges
                </h3>
                <p className={styles.messages__content}>
                    Not 100% sure it’s a perfect fit? We offer free shipping,
                    exchanges, and returns both ways on all orders Worldwide.
                </p>
                <h3 className={styles.messages__title}>Serving you</h3>
                <p className={styles.messages__content}>
                    If you have comments, questions, or issues, our Ninjas are
                    always on call. Need help? Contact a Ninja.
                </p>
                <button className={styles.messages__btn}>Contact Us</button>
            </div>
        </>
    );
};

export default Messages;
