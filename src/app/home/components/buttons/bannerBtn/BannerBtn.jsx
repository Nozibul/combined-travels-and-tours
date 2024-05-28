import styles from "./BannerBtn.module.css";

const BannerBtn = () => {
     return (
          <div>
               <button className={styles.buttons}>
                    <div className={styles.qube}>
                         <div className={styles.front}>Now click!</div>
                         <div className={styles.back}>See More!</div>
                    </div>
               </button>
          </div>
     );
};

export default BannerBtn;
