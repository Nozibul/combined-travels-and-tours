import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from "./Feedback.module.css";

const Feedback = () => {
  const profiles = [
    {
      id: 1,
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg", 
      top: 0,
      left: 10,
      rating: 4.5
    },
    {
      id: 2,
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
      top: 10,
      left: 65,
      rating: 3.8
    },
    {
      id: 3,
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      top: 50,
      left: 15,
      rating: 4.2
    },
    {
      id: 4,
      imgSrc: "https://randomuser.me/api/portraits/women/4.jpg", 
      top: 60,
      left: 70,
      rating: 4
    },
  ];

  const dots = [{ id: 1, color: "yellow", top: 35, left: 45 }];

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.feedbackTitle}>Animated Network Visualization</h2>
      <div className={`${styles.feedbackForm} relative w-full h-screen`}>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`${styles.feedbackInput} ${styles.profileImage} absolute w-20 h-20 overflow-visible border-2 border-white rounded-full shadow-lg`}
            style={{ top: `${profile.top}%`, left: `${profile.left}%` }}
          >
            <img
              src={profile.imgSrc}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
            <div className={`${styles.rating} absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-1 py-1 text-xs flex items-center shadow-lg`}>
              <FaStar className="w-3 h-3 mr-1 text-yellow-400" />
              <span>{profile.rating.toFixed(1)}</span>
            </div>
          </div>
        ))}

        {dots.map((dot) => (
          <div
            key={dot.id}
            className={`${styles.dot} absolute w-4 h-4 rounded-full ${
              dot.color === "yellow" ? styles.yellowDot : styles.greenDot
            }`}
            style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
