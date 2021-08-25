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
                <a
                    href="https://us2.list-manage.com/contact-form?u=79b0fac893a128121e9e3fd63&form_id=5211847820b649a1861c4793bc158116"
                    target="_blank"
                >
                    <button className={styles.messages__btn}>Contact Us</button>
                </a>
            </div>
        </>
    );
};

export default Messages;
