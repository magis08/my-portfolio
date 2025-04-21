import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi. I'm <span className={styles.primaryName}>Agis.</span>
                    <br />A Full-Stack Developer
                </h1>
                <p className={styles.description}>
                    with a Mechatronics background — building clean, user-focused apps using JavaScript and React.
                </p>
                <div className={styles.quickContact}>
                    <a href="mailto:agis7766@gmail.com">
                        <img src={getImageUrl("hero/gmail.png")} />
                        agis7766@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-agis-224074173/" target="_blank" rel="noreferrer">
                        <img src={getImageUrl("hero/linkedin.png")} />
                        LinkedIn/muhammad-agis
                    </a>
                    <a href="https://github.com/magis08" target="_blank" rel="noreferrer">
                        <img src={getImageUrl("hero/github72.png")} />
                        github.com/magis08</a>
                </div>
            </div>
        </section>
    );
};
