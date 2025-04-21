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
        pauseOnHover: false
    };

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <Link to="/"
                    state={{ scrollTo: "projects" }}
                    className={styles.backButton}>
                    «
                </Link>

                <h1 className={styles.title}>{project.title}</h1>
            </div>

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

            <h2 className={styles.description}>{project.description}</h2>
        </div>
    );
};