"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import classNames from "classnames";
// import img1 from "../../../../public/assets/images/backgrounds/popular-tours__img-1.jpg"
import img1 from "../../../../public/assets/images/bannerSlide/img1.jpg";
import img2 from "../../../../public/assets/images/bannerSlide/img2.jpg";
import img3 from "../../../../public/assets/images/bannerSlide/img3.jpg";
import img4 from "../../../../public/assets/images/bannerSlide/img4.jpg";
import BannerBtn from "../components/buttons/bannerBtn/BannerBtn";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      img: img1,
      author: "Combined Tours & Travels",
      title: "DESIGN SLIDER",
      topic: "Tours",
    },
    {
      img: img2,
      author: "Combined Tours & Travels",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
    {
      img: img3,
      author: "Combined Tours & Travels",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
    {
      img: img4,
      author: "Combined Tours & Travels",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
  ];

  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const timeDom = useRef(null);

  useEffect(() => {
    const timeRunning = 3000;
    const timeAutoNext = 8000;

    const handleNext = () => {
      showSlider("next");
    };

    const handlePrev = () => {
      showSlider("prev");
    };

    let runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.current.querySelectorAll(
        `.${styles.list} .${styles.item}`
      );
      const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll(
        `.${styles.thumbnail} .${styles.item}`
      );

      if (type === "next") {
        sliderDom.current.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
        carouselDom.current.classList.add(styles.next);
      } else {
        sliderDom.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.current.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.current.classList.add(styles.prev);
      }

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.current.click();
      }, timeAutoNext);

      setTimeout(() => {
        carouselDom.current.classList.remove(styles.next);
        carouselDom.current.classList.remove(styles.prev);
      }, timeRunning);
    };

    nextDom.current.addEventListener("click", handleNext);
    prevDom.current.addEventListener("click", handlePrev);

    return () => {
      if (nextDom.current) {
        nextDom.current.removeEventListener("click", handleNext);
      }
      if (prevDom.current) {
        prevDom.current.removeEventListener("click", handlePrev);
      }
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className={styles.carousel} ref={carouselDom}>
      <div className={styles.list} ref={sliderDom}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image src={item.img} alt={item.title} priority />
            <div className={styles.content}>
              <div className={classNames(styles.author, "reey-text")}>
                {item.author}
              </div>
              <div className={`${styles.topic} mt-10`}>{item.title}</div>
              <div className={`${styles.topic} mt-4`}>{item.topic}</div>
              <div>
                <BannerBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.thumbnail} ref={thumbnailBorderDom}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <Image src={item.img} alt={item.title} />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button id="prev" ref={prevDom}>
          {"<"}
        </button>
        <button id="next" ref={nextDom}>
          {">"}
        </button>
      </div>
      <div className={styles.time} ref={timeDom}></div>
    </div>
  );
};

export default Banner;
