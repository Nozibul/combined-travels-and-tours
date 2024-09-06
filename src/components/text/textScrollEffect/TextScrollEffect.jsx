"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./TextScrollEffect.module.css";
import { MotionSpan } from "@/components/motion/Motion";

/**
 * TextScrollEffect Component
 * Displays a paragraph with a scrolling effect based on scroll progress.
 * 
 * @param {string} paragraph - The text to be displayed with scrolling effect.
 * @param {string} fontSize - The font size of the text.
 * @param {string} color - The color of the text.
 * @param {string} textAlign - The alignment of the text.
 * @param {string} justifyContent - The justification of the text.
 */
export default function TextScrollEffect({
  paragraph,
  fontSize = "24px",
  color = "#313041",
  textAlign = "", // default empty
  justifyContent = "" // default empty
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0.20"],
  });

  return (
    <p
      ref={container}
      className={styles.paragraph}
      style={{
        fontSize: fontSize,
        color: color,
        textAlign: textAlign,
        justifyContent: justifyContent
      }}
    >
      {paragraph.split(" ").map((word, i) => {
        const start = i / paragraph.split(" ").length;
        const end = start + 1 / paragraph.split(" ").length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} fontSize={fontSize} color={color}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

/**
 * Word Component
 * Wraps each word and applies a scrolling effect to its characters.
 * 
 * @param {string} children - The word to be displayed.
 * @param {number} progress - The scroll progress value.
 * @param {number[]} range - The range of scroll progress for the effect.
 * @param {string} fontSize - The font size of the word.
 * @param {string} color - The color of the word.
 */
const Word = ({ children, progress, range, fontSize, color }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={styles.word} style={{ fontSize: fontSize }}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]} color={color}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

/**
 * Char Component
 * Wraps each character and applies a scrolling effect to it.
 * 
 * @param {string} children - The character to be displayed.
 * @param {number} progress - The scroll progress value.
 * @param {number[]} range - The range of scroll progress for the effect.
 * @param {string} color - The color of the character.
 */
const Char = ({ children, progress, range, color }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={styles.shadow} style={{ color: color }}>
        {children}
      </span>

      <MotionSpan style={{ opacity: opacity, color: color }}>
        {children}
      </MotionSpan>
    </span>
  );
};
