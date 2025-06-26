import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h3 className={styles.subheading}>
                        Bridging <span className={styles.highlight}>Mechatronics</span> and <span className={styles.highlight}>Software Engineering</span>
                    </h3>

                    <p className={styles.description}>
                        I have 5+ years of experience in engineering, mainly as a field engineer and in manufacturing. Recently,
                        I've added full-stack development to my skill set, allowing me to approach challenges from physical systems and digital solutions.
                    </p>

                    <div className={styles.skillsContainer}>
                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <img src={getImageUrl("skills/engineering.png")} alt="Engineering" className={styles.skillIcon} />
                                <h4 className={styles.skillTitle}>Engineering</h4>
                            </div>
                            <ul className={styles.skillList}>
                                <li><span className={styles.skillName}>Troubleshooting</span> - Diagnosing and resolving machine</li>
                                <li><span className={styles.skillName}>Preventive Maintenance</span> - Planning and executing scheduled maintenance</li>
                                <li><span className={styles.skillName}>Industrial</span> - PLC, sensors, mechatronics component</li>
                            </ul>
                        </div>
                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <img src={getImageUrl("skills/skills.gif")} alt="Frontend" className={styles.skillIcon} />
                                <h4 className={styles.skillTitle}>Frontend</h4>
                            </div>
                            <ul className={styles.skillList}>
                                <li><span className={styles.skillName}>React</span> - Hooks, Context API</li>
                                <li><span className={styles.skillName}>JavaScript</span> - ES6+</li>
                                <li><span className={styles.skillName}>HTML/CSS</span> - Responsive Design</li>
                            </ul>
                        </div>

                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <img src={getImageUrl("skills/skills.gif")} alt="Backend" className={styles.skillIcon} />
                                <h4 className={styles.skillTitle}>Backend</h4>
                            </div>
                            <ul className={styles.skillList}>
                                <li><span className={styles.skillName}>Node.js</span> - Runtime</li>
                                <li><span className={styles.skillName}>Express</span> - REST APIs</li>
                                <li><span className={styles.skillName}>Authentication</span> - JWT</li>
                            </ul>
                        </div>

                        <div className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <img src={getImageUrl("skills/database.gif")} alt="Database" className={styles.skillIcon} />
                                <h4 className={styles.skillTitle}>Databases</h4>
                            </div>
                            <ul className={styles.skillList}>
                                <li><span className={styles.skillName}>PostgreSQL</span> - Relational</li>
                                <li><span className={styles.skillName}>MongoDB</span> - NoSQL</li>
                                <li><span className={styles.skillName}>MySQL</span> - Query Optimization</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.currentLearning}>
                        <img src={getImageUrl("skills/learning.gif")} alt="Learning" className={styles.learningIcon} />
                        <p>
                            Currently mastering <strong>Next.js</strong> and <strong>TypeScript</strong> to build
                            more performant and type-safe applications.
                        </p>
                    </div>
                </div>

                <div className={styles.imageSection}>
                    <img
                        src={getImageUrl("about/about.png")}
                        alt="Developer at work"
                        className={styles.aboutImage}
                    />
                    <div className={styles.quoteCard}>
                        <div className={styles.quoteContent}>
                            "I approach coding with the same precision I used in mechanical systems"
                        </div>
                        <div className={styles.quoteAuthor}>- Agis, Developer</div>
                    </div>
                </div>
            </div>
        </section>
    );
};