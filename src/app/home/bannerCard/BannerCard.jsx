import { FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import styles from './BannerCards.module.css';

const BannerCards = () => {
  return (
    <div className='max-w-[1250px] p-16 mx-auto mt-8 mb-12 shadow-custom rounded-lg'>
      <ul className={styles.ul}>
        <li style={{ '--accent-color': '#0B374D' }} className={styles.li}>
          <div className={styles.icon}>
          <FaHtml5 />
          </div>
          <div className={styles.title}>Codepen</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?
          </div>
        </li>
        <li style={{ '--accent-color': '#1286A8' }} className={styles.li}>
          <div className={styles.icon}>
          <FaCss3 />
          </div>
          <div className={styles.title}>HTML 5</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
        <li style={{ '--accent-color': '#D2B53B' }} className={styles.li}>
          <div className={styles.icon}>
          <BiLogoJavascript />
          </div>
          <div className={styles.title}>CSS 3</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit.
          </div>
        </li>
        <li style={{ '--accent-color': '#DA611E' }} className={styles.li}>
          <div className={styles.icon}>
          <BiLogoTypescript />
          </div>
          <div className={styles.title}>Javascript</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.
          </div>
        </li>
        <li style={{ '--accent-color': '#AC2A1A' }} className={styles.li}>
          <div className={styles.icon}>
          <FaGithub />
          </div>
          <div className={styles.title}>Github</div>
          <div className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BannerCards;
