"use client";
import React from 'react';
import styles from './Feedback.module.css';

const Feedback = () => {
  const profiles = [
    { id: 1, imgSrc: "https://randomuser.me/api/portraits/men/1.jpg", top: 0, left: 10 },
    { id: 2, imgSrc: "https://randomuser.me/api/portraits/women/2.jpg", top: 10, left: 65 },
    { id: 3, imgSrc: "https://randomuser.me/api/portraits/men/3.jpg", top: 50, left: 15 },
    { id: 4, imgSrc: "https://randomuser.me/api/portraits/women/4.jpg", top: 60, left: 70 },
  ];

  const dots = [
    { id: 1, color: 'purple', top: 35, left: 45 },
    // You can add more dots here if needed
  ];

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.feedbackTitle}>Animated Network Visualization</h2>
      <div className={`${styles.feedbackForm} relative w-full h-screen`}>
        {/* Remove the SVG and line rendering logic */}
        
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`${styles.feedbackInput} ${styles.profileImage} absolute w-20 h-20 overflow-hidden border-2 border-white rounded-full shadow-lg`}
            style={{ top: `${profile.top}%`, left: `${profile.left}%` }}
          >
            <img src={profile.imgSrc} alt="Profile" className="object-cover w-full h-full" />
          </div>
        ))}

        {dots.map((dot) => (
          <div
            key={dot.id}
            className={`${styles.dot} absolute w-4 h-4 rounded-full ${dot.color === 'purple' ? styles.purpleDot : styles.greenDot}`}
            style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
