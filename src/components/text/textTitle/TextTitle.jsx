
export const TextTitle = ({ textTitle, titlePosition, tSize }) => {
  const titlePositions = titlePosition ? "text-start" : "text-center";
  const titleSize = tSize ? tSize : ["lg:text-xl", "md:text-xl", "sm:text-xl" , "xs:text-base"];

  return (
    <article className={`${titlePositions}`}>
      <span
        style={{ whiteSpace: "pre-line" }}
        className={` ${titleSize.join(" ")} mt-4 mb-2 reey-text`}
      >
        {textTitle}
      </span>
    </article>
  );
};
