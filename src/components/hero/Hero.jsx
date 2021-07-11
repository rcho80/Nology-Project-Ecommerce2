import styles from "./Hero.module.scss";
import main from "../../IMAGES/main.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.hero__img} src={main} alt="mens suits"></img>
    </div>
  );
}

export default Hero
