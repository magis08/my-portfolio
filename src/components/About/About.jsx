import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h3 className={styles.subheading}>Hi! I'm a Web Developer 👋</h3>
                    <p className={styles.description}>
                        I'm a full-stack developer who loves building clean, responsive interfaces with a focus on great user experience.
                        I enjoy working with modern frontend tools like <strong>React</strong>, and I'm currently exploring backend development using <strong>Node.js</strong> and <strong>Express</strong>.
                        My journey started from curiosity—now it's a daily passion.
                    </p>
                    <p className={styles.description}>
                        I'm a visual thinker and problem-solver who thrives on learning.
                        Outside of coding, I enjoy sketching UI ideas, staying updated on web trends, and building small personal projects to improve my skills.
                        My goal? To grow into a full-stack developer who creates digital products that feel good to use.
                    </p>
                </div>

                <img
                    src={`${import.meta.env.BASE_URL}assets/about/about.png`}
                    alt="Developer at work"
                    className={styles.aboutImage}
                />
            </div>

        </section>
    );
};
