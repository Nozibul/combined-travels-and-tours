"use client";
import React, { Fragment, useState } from "react";
import "./video.css";
import { FaPlayCircle } from "react-icons/fa";
import video from "../../../../../local-json/videoData"; // import video data with icons

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const { videoId, tagline, title, iconBoxes } = video;

  return (
    <>
      <section className="flex flex-wrap -mt-16 ">
        <div className="px-4 mb-8 lg:w-1/2 lg:mb-0">
          <div className="flex flex-col items-start">
            <div className="relative mb-8">
              <div className="cursor-pointer" onClick={() => setOpen(true)}>
                <div className="relative flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full">
                  <FaPlayCircle className="text-4xl text-white" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-75 animate-ping"></div>
                </div>
              </div>
            </div>
            <p className="mb-4 text-2xl text-blue-500 font-cursive">
              {tagline}
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-800">
              {title}
            </h2>
          </div>
        </div>
        <div className="w-full py-2 m-auto lg:w-2/5">
          <div className="grid grid-cols-2 gap-4">
            {iconBoxes?.map(({ id, icon: IconComponent, title }) => (
              <div
                key={id}
                className="py-6 text-center transition-shadow border border-gray-600 rounded-lg icon-hover hover:shadow-lg"
              >
                <div className="mb-4 ">
                  <span className="inline-block text-[64px] text-gray-900 transition-all duration-500 ease-in-out">
                    {IconComponent && <IconComponent />}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span>
                      {i !== title.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
