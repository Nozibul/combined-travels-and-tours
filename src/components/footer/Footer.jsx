import styles from "./Footer.module.css";
import FooterSectionOne from "./footerSectionOne/FooterSectionOne";
import Newsletter from "./componets/newsletter/Newsletter";
import SocialFooter from "./socialFooter/SocialFooter";
import footerData from "../../../local-json/footerSectionTwo.json";
import { CompanyList } from "./componets/companyList/Company";
import Image from "next/image";

const Footer = () => {
  // Destructure with default values to handle undefined fields safely
  const {
    logo = "",
    icons = [],
    companies = [],
    explore = [],
    author = "Unknown Author",
    about = "No description available",
  } = footerData ?? {};

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <FooterSectionOne />
        <div className="block my-10">
          <hr className="w-[calc(100%-16rem)] mx-auto border-gray-500" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-content">Section 1</div>
          <div className="footer-content">
            <CompanyList title="Company" links={companies} />
          </div>
          <div className="footer-content">
            <CompanyList title="Explore" links={explore} />
          </div>

          {/* Newsletter */}
          <div>
            <Newsletter />
          </div>
        </div>
      </div>
      {/* Social Footer */}
      <div>
        <SocialFooter />
      </div>
    </footer>
  );
};

export default Footer;
