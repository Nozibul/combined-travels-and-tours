import footerData from "../../../../local-json/footerSectionTwo.json";
import styles from "./SocialFooter.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const SocialFooter = () => {
  const { social, year, author } = footerData;

  const iconMap = {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaInstagramSquare,
  };

  return (
    <>
      <div className={styles.siteFooterBottom}>
        <div className={styles.siteFooterBottomInner}>
          <div className={styles.siteFooterBottomLeft}>
            <div className={styles.footerWidgetSocial}>
              {social?.map(({ icon, link }, index) => {
                const IconComponent = iconMap[icon];
                return (
                  <Link href={link} key={index}>
                    {/* Render the icon if it's a valid component */}
                    {IconComponent ? (
                      <span className="text-lg">
                        <IconComponent />
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.siteFooterBottomRight}>
            <p>
              @ All Copyright {year}, <Link href="#">{author}</Link>
            </p>
          </div>
          <div className={styles.siteFooterBottomLeftArrow}>
            <Link href="#" className="scroll-to-target scroll-to-top">
              <span className="icon-right-arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialFooter;
