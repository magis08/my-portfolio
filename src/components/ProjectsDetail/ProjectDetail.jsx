import React from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: true
    };

    if (!project) {
        return <div className={styles.notFound}>Project not found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/" state={{ scrollTo: "projects" }} className={styles.backButton}>
                    ← Back to Projects
                </Link>
                <h1 className={styles.title}>{project.title}</h1>
            </div>

            <div className={styles.content}>
                <div className={styles.sliderContainer}>
                    <Slider {...sliderSettings}>
                        {project.screenshots.map((screenshot, index) => (
                            <div key={index} className={styles.slide}>
                                <img
                                    src={getImageUrl(screenshot)}
                                    alt={`Screenshot ${index + 1}`}
                                    className={styles.screenshot}
                                />
                                <div className={styles.slideNumber}>
                                    {index + 1} / {project.screenshots.length}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={styles.details}>
                    <h2 className={styles.subtitle}>Project Overview</h2>
                    <p className={styles.description}>{project.description}</p>
                    
                    {project.technologies && (
                        <div className={styles.techStack}>
                            <h3 className={styles.techTitle}>Technologies Used</h3>
                            <div className={styles.techList}>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className={styles.techItem}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {project.features && (
                        <div className={styles.features}>
                            <h3 className={styles.featuresTitle}>Key Features</h3>
                            <ul className={styles.featuresList}>
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <span className={styles.featureBullet}>▹</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};