import Image from "next/image";
import { works } from "../../../../local-json/worksInfo";
import { MotionDiv } from "@/components/motion/Motion.jsx";
import { TextTitle } from "@/components/text/textTitle/TextTitle.jsx";
import { TextHeader } from "@/components/text/textHeader/TextHeader.jsx";
import TextScrollEffect from "@/components/text/textScrollEffect/TextScrollEffect";

const WorkSection = () => {
  // Define the motion props as a constant
  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.3 },
    variants: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.6 },
    },
  };

  return (
    <>
      <div className="max-w-[1250px] p-16 mx-auto mt-8 mb-12 shadow-custom rounded-lg">
        <TextTitle textTitle="How it Works" />
        <TextHeader
          textHeader="Create CV/Resume Following 3 Simple Steps"
          tSize="text-3xl"
        />
        <div className="grid w-full gap-4 mt-12 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 justify-items-center">
          {works?.length > 0 ? (
            works?.map((work) => {
              const { id, title, header, img } = work;

              return (
                <MotionDiv
                  className="grid justify-items-center"
                  key={id}
                  {...motionProps}
                >
                  <div className="relative flex items-center justify-center outline-violet-600 work-container">
                    <div className="flex items-center justify-center child-circle">
                      <Image alt="document-image" src={img} />
                    </div>
                    <div className="flex items-center justify-center mini-circle">
                      0{id}
                    </div>
                  </div>
                  <div className="mt-8">
                    <TextScrollEffect
                      paragraph={header}
                      fontSize="22px"
                      color=""
                      textAlign="center"
                      justifyContent="center"
                    />
                  </div>
                </MotionDiv>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkSection;
