import styles from "./Footer.module.scss";
import NewsLetterSubscribe from "../newsLetterSubscribe/NewsLetterSubscribe";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <footer className={styles.footer__title}>
                    <NewsLetterSubscribe />
                </footer>
                <div className={styles.footer__copyright}>
                    Created by _RC_ 2021
                </div>
            </div>
        </>
    );
};

export default Footer;
