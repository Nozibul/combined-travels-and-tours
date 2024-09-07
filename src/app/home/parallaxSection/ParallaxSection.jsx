"use client";
import React, { useEffect } from "react";
import styles from "./ParallaxSection.module.css";
import { TextTitle } from "@/components/text/textTitle/TextTitle";
import Video from "../components/video/Video";

const ParallaxSection = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (event) => {
      if (event.target.closest('a[href^="#"]')) {
        const targetId = event.target
          .closest('a[href^="#"]')
          .getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className={`grid grid-cols-1 ${styles.body}`}>
        <div className={styles.firstWrap}>
          <div className={styles.firstDiv}>
            <TextTitle textTitle="Are you ready to travel?" />
            <div className={styles.firstInnerDiv}>
              <p>Start Scrolling</p>
              <a href="#anchor">
                <span
                  className={`glyphicon glyphicon-circle-arrow-down ${styles.downArrow}`}
                >
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.secondWrap}>
          <div className={styles.secondDiv} id="anchor">
            <p className={styles.bodyText}>
              <span className={styles.lineSeparator}></span> Combined Tours &
              Travels is a Online Tour Booking Platform
              <span className={styles.lineSeparator}></span>
            </p>
          </div>
          <div>
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxSection;
