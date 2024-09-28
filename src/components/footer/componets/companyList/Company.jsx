import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Company.module.css";
import { TextTitle } from "@/components/text/textTitle/TextTitle";

export const CompanyList = ({ title, links }) => {
  return (
    <>
      <div className="mb-6 underline-element">
        <TextTitle textTitle={title} />
      </div>
      <nav className="pl-4">
        <ul className={`${styles.companyList} list-none`}>
          {links?.map(({ id, link, title }) => (
            <li key={id}>
              <Link
                href={link}
                target={link.includes("/") ? undefined : "_blank"}
                rel={link.includes("/") ? undefined : "noreferrer"}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

// Prop Types Validation for better code maintainability and error checking
CompanyList.propTypes = {
  title: PropTypes.string.isRequired, 
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      link: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};


