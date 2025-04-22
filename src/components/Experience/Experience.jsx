import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import education from "../../data/education.json";

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Career</h2>

            <div className={styles.content}>
                {/* Left column: Experience */}
                <div className={styles.experienceContainer}>
                    <h3 className={styles.sectionHeading}>Work Experiences</h3>
                    <ul className={styles.history}>
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <div className={styles.logoContainer}>
                                        <img
                                            src={getImageUrl(historyItem.imageSrc)}
                                            alt={`${historyItem.organisation} Logo`}
                                            className={styles.companyLogo}
                                        />
                                    </div>
                                    <div className={styles.historyContent}>
                                        <h4>{`${historyItem.role}, ${historyItem.company}`}</h4>
                                        <p className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul className={styles.experienceList}>
                                            {historyItem.experiences.map((experience, idx) => {
                                                return (
                                                    <li key={idx} className={styles.experienceListItem}>
                                                        <span className={styles.bullet}>▹</span>
                                                        {experience}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right column: Education */}
                <div className={styles.educationContainer}>
                    <h3 className={styles.sectionHeading}>Education</h3>
                    <ul className={styles.education}>
                        {education.map((educationItem, id) => {
                            return (
                                <li key={id} className={styles.educationItem}>
                                    <div className={styles.logoContainer}>
                                        <img
                                            src={getImageUrl(educationItem.imageSrc)}
                                            alt={`${educationItem.school} Logo`}
                                            className={styles.schoolLogo}
                                        />
                                    </div>
                                    <div className={styles.educationContent}>
                                        <h4>{`${educationItem.major}, ${educationItem.school}`}</h4>
                                        <p className={styles.date}>{`${educationItem.startDate} - ${educationItem.graduation}`}</p>
                                        <ul className={styles.descriptionList}>
                                            {educationItem.description.map((description, idx) => {
                                                return (
                                                    <li key={idx} className={styles.descriptionListItem}>
                                                        <span className={styles.bullet}>▹</span>
                                                        {description}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}