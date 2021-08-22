import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <footer className={styles.footer__title}>
                    <h3 className={styles.footer__text}>
                        Join our Newsletter for the latest
                    </h3>
                    <form action="http#" className={styles.footer__form}>
                        <input
                            type="email"
                            className={styles.footer__form__input}
                            placeholder={"Enter your email address"}
                        ></input>
                        <button className={styles.footer__form__btn}>
                            Submit
                        </button>
                    </form>
                </footer>
                <div className={styles.footer__copyright}>
                    Created by _RC_ 2021
                </div>
            </div>
        </>
    );
};

export default Footer;
