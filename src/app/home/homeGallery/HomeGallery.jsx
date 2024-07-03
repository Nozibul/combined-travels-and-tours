"use client";
import Image from "next/image";
import styles from "./HomeGallery.module.css";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import img1 from "../../../../public/assets/images/gallery/5.jpg";
import img2 from "../../../../public/assets/images/gallery/6.jpg";
import img3 from "../../../../public/assets/images/gallery/7.jpg";
import img4 from "../../../../public/assets/images/gallery/8.jpg";
import img5 from "../../../../public/assets/images/gallery/9.jpg";
import img6 from "../../../../public/assets/images/gallery/10.jpg";
import img7 from "../../../../public/assets/images/gallery/11.jpg";
import img8 from "../../../../public/assets/images/gallery/12.jpg";
import img9 from "../../../../public/assets/images/gallery/13.jpg";
import img10 from "../../../../public/assets/images/gallery/14.jpg";
import img11 from "../../../../public/assets/images/gallery/15.jpg";

import { TextTitle } from "@/components/text/textTitle/TextTitle";
import { TextHeader } from "@/components/text/textHeader/TextHeader";


const galleryImages = [
  { src: img1, alt: "Gallery Image 1" },
  { src: img2, alt: "Gallery Image 2" },
  { src: img3, alt: "Gallery Image 3" },
  { src: img4, alt: "Gallery Image 4" },
  { src: img5, alt: "Gallery Image 5" },
  { src: img6, alt: "Gallery Image 6" },
  { src: img7, alt: "Gallery Image 7" },
  { src: img8, alt: "Gallery Image 8" },
  { src: img9, alt: "Gallery Image 9" },
  //   { src: img10, alt: "Gallery Image 10" },
  //   { src: img11, alt: "Gallery Image 11" },
];

const HomeGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="max-w-[1200px] mx-auto mt-20 mb-20">
      <TextTitle textTitle="Destination lists" /> 
      <TextHeader textHeader="Go Exotic Places" tSize="text-3xl" />
      <LightGallery
        elementClassNames={styles.lgReactElement}
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {galleryImages.map((image, index) => (
          <Image
            key={index}
            className={styles.gallery__item}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </LightGallery>
    </div>
  );
};

export default HomeGallery;
