import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.content}>
                <h2>Let's Connect!</h2>
                <p>Feel free to reach out.</p>
            </div>
            <div className={styles.contact}>
                <ul>
                    <li>
                        <a href="mailto:agis7766@gmail.com" target="_blank">
                            <img src={getImageUrl("hero/gmail.png")} />
                            agis7766@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/magis08" target="_blank">
                            <img src={getImageUrl("hero/github72.png")} />
                            github.com/magis08
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/muhammad-agis-224074173/" target="_blank">
                            <img src={getImageUrl("hero/linkedin.png")} />
                            LinkedIn/muhammad-agis
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/m___agis" target="_blank">
                            <img src={getImageUrl("hero/ig.png")} />
                            @m___agis
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}