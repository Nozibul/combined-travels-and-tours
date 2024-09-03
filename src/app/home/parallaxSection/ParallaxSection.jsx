"use client";
import React, { useEffect } from 'react';
import styles from './ParallaxSection.module.css';

const ParallaxSection = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (event) => {
      if (event.target.closest('a[href^="#"]')) {
        const targetId = event.target.closest('a[href^="#"]').getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    // Back to top button visibility on scroll
    const handleScroll = () => {
      const backToTopButton = document.getElementById('backToTop');
      if (window.scrollY > 100) {
        backToTopButton.classList.add(styles.show);
      } else {
        backToTopButton.classList.remove(styles.show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.firstWrap}>
        <div className={styles.firstDiv}>
          <p className={styles.newUpdate}>
            Note: Click{' '}
            <a href="https://codepen.io/nikkz/pen/qZJKqG" target="_blank" rel="noopener noreferrer">
              here
            </a>{' '}
            to see a newer and easier parallax effect
          </p>
          <div className={styles.firstInnerDiv}>
            <p>Start Scrolling</p>
            <a href="#anchor">
              <span className={`glyphicon glyphicon-circle-arrow-down ${styles.downArrow}`}>
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.secondWrap}>
        <div className={styles.secondDiv} id="anchor">
          <p className={styles.bodyText}>
            <span className={styles.lineSeparator}></span> Sample parallax with different background images
            <span className={styles.lineSeparator}></span>
          </p>
        </div>
        <div className={styles.thirdDiv}></div>
      </div>

      <div className={styles.thirdWrap}>
        <div className={styles.fourthDiv}>
          <p className={styles.bodyText}>
            <span className={styles.lineSeparator}></span> Sample parallax with different background images
            <span className={styles.lineSeparator}></span>
          </p>
        </div>
        <div className={styles.fifthDiv}></div>
      </div>

      <a href="#" id="backToTop" className={styles.backToTop} title="Back to top">
        &uarr;
      </a>
    </div>
  );
};

export default ParallaxSection;
