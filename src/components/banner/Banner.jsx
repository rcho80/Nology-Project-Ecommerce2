  import styles from "./Banner.module.scss";
  import manFormal from "../../IMAGES/manFormal.jpg";
  import shoes from "../../IMAGES/shoes.jpg";
  import manCasual from "../../IMAGES/manCasual.jpg";
  import walking from "../../IMAGES/walking.jpg";
  import bannerFormal from "../../IMAGES/bannerFormal.jpg";


  const Banner = () => {
    return (
      <>
        <div>
          <p className={styles.specials__title}>Monthly Favourites</p>
        </div>
        <div className={styles.specials}>
          <div>
            <img
              className={styles.specials__img}
              src={manFormal}
              alt="man wearing suit"
            ></img>
            <p className={styles.specials__text}>Its party time</p>
          </div>
          <div>
            <img
              className={styles.specials__img}
              src={walking}
              alt="mens watch"
            ></img>
            <p className={styles.specials__text}>Made for walking</p>
          </div>
          <div>
            <img
              className={styles.specials__img}
              src={shoes}
              alt="mens formal shoes"
            ></img>
            <p className={styles.specials__text}>Monday blues</p>
          </div>
          <div>
            <img
              className={styles.specials__img}
              src={manCasual}
              alt="man wearing smart casual clothing"
            ></img>
            <p className={styles.specials__text}>Simply essential</p>
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
              Updated styles to last the test of time. Ready to go when you are.
            </p>
            <button className={styles.banner__btn}>Shop Now </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Banner;
  
  
  
 