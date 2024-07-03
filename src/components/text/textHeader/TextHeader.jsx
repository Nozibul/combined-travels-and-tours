export const TextHeader = ({ textHeader, headerPosition, tSize }) => {
    const headerPositions = headerPosition ? "text-start" : "text-center";
    const headerSize = tSize
      ? (Array.isArray(tSize) ? tSize : [tSize])
      : ["md:text-2xl", "sm:text-xl", "xs:text-base"];
  
    return (
      <article className={`${headerPositions} mt-6 mb-12`}>
        <span
          style={{ whiteSpace: 'pre-line' }}
          className={` ${headerSize.join(" ")} font-bold font-serif text-gray-600`}
        >
          {textHeader}
        </span>
      </article>
    );
  };