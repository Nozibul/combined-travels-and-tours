import React from "react";
import Image from "next/image";
import styles from "@/styles/Gallery.module.css";

const Gallery = ({ image = "" }) => {
  return (
    <li className={`animated fadeInUp ${styles.singleGalleryItem}`}>
      <div className={styles.galleryImgBox}>
        <Image
          src={`/images/gallery/${image}`}
          alt=""
          width={500}
          height={500}
          layout="responsive"
        />
        <div className={styles.galleryIcon}>
          <a href={`/images/gallery/${image}`}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Gallery;
