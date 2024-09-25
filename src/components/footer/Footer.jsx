import styles from "./Footer.module.css";
import FooterSectionOne from "./footerSectionOne/FooterSectionOne";
import Newsletter from "./newsletter/Newsletter";
import SocialFooter from "./socialFooter/SocialFooter";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <FooterSectionOne />
          <div className="block my-10">
            <hr className="w-[calc(100%-16rem)]  mx-auto border-gray-500" />
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 border">Section 1</div>
              <div className="p-4 border">Section 2</div>
              <div className="p-4 border">Section 3</div>
              
              {/* Newsletter */}
              <div>
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Footer */}
        <div>
          <SocialFooter />
        </div>
        <div >
          <h2>Hello</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
