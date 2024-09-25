import contactData from "../../../../local-json/footer"; // Import the JSON data
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import styles from "./FooterSectionOne.module.css";
import { TextTitle } from "@/components/text/textTitle/TextTitle";


const iconMap = {
    FaLocationDot,
    FaPhone,
    IoIosMailOpen,
  };
const FooterSectionOne = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3">
        {contactData?.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div className="" key={index}>
              <div className={styles.container}>
                <div className={styles.leftBox}>
                  <div className={styles.boxNumber}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="mt-2 underline-element">
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
    </>
  );
};

export default FooterSectionOne;
