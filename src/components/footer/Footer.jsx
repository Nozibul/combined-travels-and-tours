import { TextTitle } from "../text/textTitle/TextTitle";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <h2>Footer</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border">
              <div className="underline-element">
                <TextTitle textTitle="Find Us " />
              </div>
            </div>
            <div className="p-4 border ">
              <div className="underline-element">
                <TextTitle textTitle="Call Us" />
              </div>
            </div>
            <div className="p-4 border ">
              <div className="underline-element">
                <TextTitle textTitle="Mail Us" />
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="p-2 border-2">
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
