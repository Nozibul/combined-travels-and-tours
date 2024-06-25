import React from "react";
import galleryOne from "@/data/galleryOne";
import styles from "@/styles/HomeGallery.module.css";
import Gallery from "@/components/gallery/Gallery";

const { bg, galleryData } = galleryOne;

const HomeGallery = () => {
  return (
    <section className={styles.galleryOne}>
      <div
        className={styles.galleryOneBg}
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className={`${styles.galleryOneContainerBox} clearfix`}>
        <ul className={`list-unstyled ${styles.galleryOneContent} clearfix`}>
          {galleryData?.map((image, index) => (
            <Gallery key={index} image={image} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeGallery;
