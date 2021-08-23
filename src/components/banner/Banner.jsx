import styles from "./Banner.module.scss";
import manFormal from "../../IMAGES/manFormal.jpg";
import shoes from "../../IMAGES/shoes.jpg";
import manCasual from "../../IMAGES/manCasual.jpg";
import walking from "../../IMAGES/walking.jpg";
import bannerFormal from "../../IMAGES/bannerFormal.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div>
                <p className={styles.specials__title}>Monthly Favourites</p>
            </div>
            <div className={styles.specials}>
                <div>
                    <Link to="/products">
                        <img
                            className={styles.specials__img}
                            src={manFormal}
                            alt="man wearing suit"
                        ></img>
                    </Link>
                    <p className={styles.specials__text}>
                        <Link
                            to="/products"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Its party time
                        </Link>
                    </p>
                </div>
                <div>
                    <Link to="/products">
                        <img
                            className={styles.specials__img}
                            src={walking}
                            alt="mens watch"
                        ></img>
                    </Link>
                    <p className={styles.specials__text}>
                        <Link
                            to="/products"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Made for walking
                        </Link>
                    </p>
                </div>
                <div>
                    <Link to="/products">
                        <img
                            className={styles.specials__img}
                            src={shoes}
                            alt="mens formal shoes"
                        ></img>
                    </Link>
                    <p className={styles.specials__text}>
                        <Link
                            to="/products"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Monday blues
                        </Link>
                    </p>
                </div>
                <div>
                    <Link to="/products">
                        <img
                            className={styles.specials__img}
                            src={manCasual}
                            alt="man wearing smart casual clothing"
                        ></img>
                    </Link>
                    <p className={styles.specials__text}>
                        <Link
                            to="/products"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Simply essential
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.banner}>
                <img
                    className={styles.banner__img}
                    src={bannerFormal}
                    alt="clothes on table"
                ></img>
                <div className={styles.banner__text}>
                    <p>
                        Updated styles to last the test of time. Ready to go
                        when you are.
                    </p>
                    <button className={styles.banner__btn}>
                        <Link
                            to="/products"
                            style={{
                                textDecoration: "none",
                                color: "rgb(217, 119, 6)"
                            }}
                        >
                            Shop Now{" "}
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Banner;
