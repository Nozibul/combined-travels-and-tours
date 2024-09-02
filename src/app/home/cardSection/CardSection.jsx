"use client";
import styles from "./CardSection.module.css";
import { projects } from "../../../../local-json/cardData";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Card from "../components/card/Card";
import { TextTitle } from "@/components/text/textTitle/TextTitle";
import { TextHeader } from "@/components/text/textHeader/TextHeader";

const CardSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="mt-28">
        <TextTitle textTitle="Featured tours" />
        <TextHeader textHeader="Most Popular Tours" tSize="text-4xl" />
      </div>
      <motion.div ref={container} className={styles.cardSection}>
        {projects?.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              url={project.link}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default CardSection;
