import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import education from "../../data/education.json";

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.mainTitle}>CAREER</h2>

            <div className={styles.content}>
                <div className={styles.skillsColumn}>
                    <h1 className={styles.skillsTitle}>Skills</h1>
                    <div className={styles.skillsGrid}>
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skillItem}>
                                    <div className={styles.skillIconContainer}>
                                        <img
                                            src={getImageUrl(skill.imageSrc)}
                                            alt={skill.title}
                                            className={styles.skillImage}
                                        />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right column: Experience and Education */}
                <div className={styles.infoColumn}>
                    {/* Experience section */}
                    <div className={styles.experienceContainer}>
                        <h1>Work Experiences</h1>
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
                                            <h3>{`${historyItem.role}, ${historyItem.company}`}</h3>
                                            <p className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul className={styles.experienceList}>
                                                {historyItem.experiences.map((experience, idx) => {
                                                    return <li key={idx}>{experience}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Education section */}
                    <div className={styles.educationContainer}>
                        <h1>Education</h1>
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
                                            <h3>{`${educationItem.major}, ${educationItem.school}`}</h3>
                                            <p className={styles.date}>{`${educationItem.startDate} - ${educationItem.graduation}`}</p>
                                            <ul className={styles.descriptionList}>
                                                {educationItem.description.map((description, idx) => {
                                                    return <li key={idx}>{description}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}