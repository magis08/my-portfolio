import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import { TodoModal } from "../TodoModal/TodoModal";

export const Projects = () => {
    const [showTodo, setShowTodo] = useState(false);

    const simpleProject = {
        id: "todo",
        title: "Simple To-Do List Demo",
        description: "A simple and clean To-Do app built with React and useState hooks. Try it out!",
        imageSrc: "projects/todo/todo-cover.png"
    };

    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.projectWrapper}>
                <div className={styles.projectRowList}>
                    {projects.map((projectItem) => (
                        <Link
                            key={projectItem.id}
                            to={`/projects/${projectItem.id}`}
                            className={styles.projectCard}
                        >
                            <img
                                src={getImageUrl(projectItem.imageSrc)}
                                alt={`${projectItem.title} Project`}
                                className={styles.projectImage}
                            />
                            <h3 className={styles.projectTitle}>{projectItem.title}</h3>
                            <p className={styles.projectDescription}>{projectItem.description}</p>
                            <span>
                                View Details ⇨
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Demo Card */}
            <div className={styles.projectCardFull}>
                <div className={styles.projectContentFull}>
                    <h3>{simpleProject.title}</h3>
                    <p>{simpleProject.description}</p>
                    <button
                        className={styles.demoButton}
                        onClick={() => setShowTodo(true)}
                    >
                        Try Now!
                    </button>
                    <TodoModal isOpen={showTodo} onClose={() => setShowTodo(false)} />
                </div>
            </div>

        </section>
    );
};
