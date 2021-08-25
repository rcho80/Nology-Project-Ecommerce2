import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Grid from "../../components/grid/Grid";
import Banner from "../../components/banner/Banner";
import Messages from "../../components/messages/Messages";
import Hero from "../../components/hero/Hero";

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <Banner />
            <Grid />
            <Messages />
        </div>
    );
};

export default Home;
