import { TextTitle } from "../text/textTitle/TextTitle";
import contactData from "../../../local-json/footer"; // Import the JSON data
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import styles from "./Footer.module.css";

const iconMap = {
  FaLocationDot,
  FaPhone,
  IoIosMailOpen,
};

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <div className="mb-8 grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3">
            {contactData?.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div className="" key={index}>
                  <div className={styles.container}>
                    <div className={styles.leftBox}>
                      <div className={styles.boxNumber}>
                        {IconComponent && <IconComponent />}
                      </div>
                      <div
                        className={`${styles.boxTitle} mt-2 underline-element`}
                      >
                        <TextTitle textTitle={item.title} titlePosition />
                      </div>
                    </div>
                    <div className={styles.bottomBox}>
                      {item.details.map((detail, idx) => (
                        <span key={idx}>{detail}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="p-2 mt-8 border-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 border">Section 1</div>
              <div className="p-4 border">Section 2</div>
              <div className="p-4 border">Section 3</div>
              <div className="p-4 border">Section 4</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
