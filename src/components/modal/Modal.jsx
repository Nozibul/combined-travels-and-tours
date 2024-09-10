"use client";
import React, { useState, useRef } from 'react';
import styles from './Modal.module.css';

const Modal = ({ children }) => {
  const [activeModal, setActiveModal] = useState('');
  const [lastClick, setLastClick] = useState(0);
  const modalContainerRef = useRef(null);

  const handleButtonClick = (id) => {
    setActiveModal(id);
    document.body.classList.add(styles.modalActive);
  };

  const handleCloseModal = (event) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastClick;

    if (timeDifference < 300) {
      // Double click detected
      setActiveModal('');
      document.body.classList.remove(styles.modalActive);
    }

    setLastClick(currentTime);
  };

  return (
    <div>
      <div
        id={styles.modalContainer}
        className={activeModal ? styles[activeModal] : ''}
        onClick={handleCloseModal}
        ref={modalContainerRef}
      >
        <div className={styles.modalBackground}>
          <div className={styles.modal}>
            <h2>Im a Modal</h2>
            <p className={styles.instruction}>Double-click anywhere outside the modal to close</p>

            <svg
              className={styles.modalSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {/* <h1>Modal Animations</h1> */}
        <div className={styles.buttons}>
          <div id="one"  onClick={() => handleButtonClick('one')}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
