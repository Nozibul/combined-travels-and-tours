import { FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import styles from './IconCards.module.css';

const IconCards = () => {
  return (
    <div className="icon_card max-w-[1250px] p-16 mx-auto mt-20 mb-12 shadow-custom rounded-lg">
      <ul className={styles.ul}>
        <li style={{ '--accent-color': '#60c5a6' }} className={styles.li} >
          <div className={styles.icon}>
          <FaGithub />
          </div>
          <div className={styles.title}>Github</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            impedit?
          </div>
        </li>
        <li style={{ '--accent-color': '#f20071' }} className={styles.li}>
          <div className={styles.icon}>
          <FaHtml5 />
          </div>
          <div className={styles.title}>HTML 5</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
        <li style={{ '--accent-color': '#FCBA35' }} className={styles.li} >
          <div className={styles.icon}>
          <FaCss3 />
          </div>
          <div className={styles.title}>CSS 3</div>
          <div className={styles.descr}>Lorem ipsum dolor sit.</div>
        </li>
        <li style={{ '--accent-color': '#DAE438' }} className={styles.li} >
          <div className={styles.icon}>
          <BiLogoJavascript />
          </div>
          <div className={styles.title}>Javascript</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laboriosam odio alias.
          </div>
        </li>
        <li style={{ '--accent-color': '#994D7F' }} className={styles.li}>
          <div className={styles.icon}>
          <BiLogoTypescript />
          </div>
          <div className={styles.title}>TypeScript</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
      </ul>
    
    </div>
  );
};

export default IconCards;
