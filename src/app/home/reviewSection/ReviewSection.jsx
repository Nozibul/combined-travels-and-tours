import Image from "next/image";
import styles from "./ReviewSection.module.css"; // Import the CSS module
import imgs from "../../../../public/assets/images/gallery/1.jpg"

const ReviewSection = () => {
  return (
    <>
      <div className="border h-80">
        <div className="col-md-offset-2 col-md-8">
          <div
            id="testimonial-slider"
            className={`owl-carousel ${styles.owlCarousel}`}
          >
            <div className={styles.testimonial}>
              <div className={styles.pic}>
                <Image
                  priority
                  src={imgs}
                  alt="Diana"
                  // width={500}
                  // height={500}
                  className="img-responsive"
                />
              </div>
              <h3 className={styles.testimonialInfo}>
                Diana
                <small>Web Designer</small>
              </h3>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
