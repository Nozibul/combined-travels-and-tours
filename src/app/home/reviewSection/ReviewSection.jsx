import styles from "./ReviewSection.module.css"; // Import the CSS module

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
                <img
                  src="http://www.markharwood.plus.com/images/people%20large/people8.jpg"
                  alt="Diana"
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
