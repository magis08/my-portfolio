import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigateAndScroll = (sectionId) => {
        navigate("/", { state: { scrollTo: sectionId } });
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <a
                className={styles.title}
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/", { state: { scrollTo: "top" } });
                    setMenuOpen(false);
                }}
            >
                agis' corner
            </a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl('nav/close.png')
                            : getImageUrl('nav/menu.png')
                    }
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                >
                    <li>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigateAndScroll("about");
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigateAndScroll("experience");
                            }}
                        >
                            Career
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigateAndScroll("projects");
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigateAndScroll("contact");
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
