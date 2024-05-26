"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "react-icons/ri";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleToggleClick = () => {
        setShowMenu(!showMenu);
    };

    const handleCloseClick = () => {
        setShowMenu(false);
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrollPosition >= 100 ? styles.headerScrolled : ''}`} id="header">
            <nav className={`${styles.nav} container`}>
                <Link href="/" className={styles.nav__logo}>
                    Logo
                </Link>

                <div
                    className={`${styles.nav__menu} ${showMenu ? styles.showMenu : ""}`}
                    id="nav-menu"
                >
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <Link href="/" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/about" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/destinations" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>Destinations</span>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/projects" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/studio" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>Studio</span>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/contact" className={styles.nav__link}>
                                <p><RiArrowRightUpLine /> </p>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>

                    <div
                        className={styles.nav__close}
                        id="nav-close"
                        onClick={handleCloseClick}
                    >
                        <RiCloseLine />
                    </div>
                </div>

                <div
                    className={styles.nav__toggle}
                    id="nav-toggle"
                    onClick={handleToggleClick}
                >
                    <RiMenuLine />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
