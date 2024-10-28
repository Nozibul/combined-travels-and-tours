"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Laptop, Smartphone, Tablet } from "lucide-react";

const TestimonialCard = ({ testimonial, isActive }) => {
  const { company, logo, quote, author, position, location, color } = testimonial;

  return (
    <div className="max-w-lg text-center">
      <div
        className="w-32 h-32 mx-auto mb-6 overflow-hidden bg-center bg-no-repeat bg-cover rounded-full"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />
      <h3
        className="mb-4 text-3xl font-bold"
        style={{ color }}
      >
        {company}
      </h3>
      <p className="mb-6 text-gray-600">{quote}</p>
      <p className="font-bold text-gray-800">{author}, {position}</p>
      <p className="text-sm italic text-gray-500">{location}</p>
    </div>
  );
};

const TestimonialList = ({ testimonials, activeIndex, onActiveIndexChange }) => {
  return (
    <div className="w-full border-b border-white md:w-1/3 md:border-b-0 md:border-r">
      <ul className="flex flex-col h-full">
        {testimonials?.map((item, index) => (
          <li
            key={item.id}
            className="flex-1 border-b border-white last:border-b-0"
          >
            <input
              type="radio"
              id={`radio_testimonial-${item.id}`}
              name="testimonial"
              className="hidden"
              checked={index === activeIndex}
              onChange={() => onActiveIndexChange(index)}
            />
            <label
              htmlFor={`radio_testimonial-${item.id}`}
              className={`h-full flex items-center px-6 py-4 cursor-pointer transition-all duration-400
                ${
                  index === activeIndex
                    ? "opacity-100 bg-white"
                    : "opacity-60 hover:opacity-80 hover:bg-white"
                }`}
              style={{
                borderRight:
                  index === activeIndex ? `4px solid ${item.color}` : "",
                color: index === activeIndex ? item.color : "",
              }}
            >
              <div
                className="mr-4 overflow-hidden bg-center bg-no-repeat bg-cover border-2 rounded-full shadow-sm w-14 h-14"
                style={{
                  backgroundImage: `url(${item.logo})`,
                  borderColor:
                    index === activeIndex ? item.color : "transparent",
                }}
              />
              <span className="text-[16px] font-medium tracking-wide">
                {item.company}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const cycleTestimonials = () => {
      timerRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
      }, 5000);
    };

    cycleTestimonials();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex]);

  const handleClick = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div className="max-w-[1250px] p-8 md:p-16 mx-auto mt-8 mb-12 shadow-custom rounded-lg">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-700">
          What Our Clients Say
        </h2>
      </div>

      <div
        className="bg-gray-50 shadow-sm mx-auto flex flex-col-reverse md:flex-row min-h-[420px]"
        onClick={handleClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center justify-center w-full p-8 md:w-2/3"
          >
            <TestimonialCard
              testimonial={testimonialData[activeIndex]}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>

        <TestimonialList
          testimonials={testimonialData}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
      </div>

      {/* <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-4">
          <Laptop className="w-6 h-6 text-gray-500" />
          <Tablet className="w-6 h-6 text-gray-500" />
          <Smartphone className="w-6 h-6 text-gray-500" />
        </div>
      </div> */}
    </div>
  );
};

const testimonialData = [
  {
    id: 1,
    company: "Elimination",
    logo: "/assets/images/gallery/19.jpg",
    quote:
      "The team really takes pride in their work. If I didn't know any better I would think they actually worked for my company.",
    author: "Bill",
    position: "Owner",
    location: "Rochester, NY",
    color: "#d64541",
  },
  {
    id: 2,
    company: "Handyman",
    logo: "/assets/images/gallery/18.jpg",
    quote:
      "Quite simply… the service offers prompt response time to my visitors and helps me to better know what type of project a potential customer wants.",
    author: "Bill",
    position: "Owner",
    location: "Tucson, AZ",
    color: "#f5d76e",
  },
  {
    id: 3,
    company: "Mod Movers",
    logo: "/assets/images/gallery/17.jpg",
    quote:
      "I couldn't believe it. I actually had to hire someone to help me keep up with the new business. I had no idea my website had so much value.",
    author: "Marlene",
    position: "Owner",
    location: "Monterey, CA",
    color: "#00b16a",
  },
  {
    id: 4,
    company: "Maria",
    logo: "/assets/images/gallery/16.jpg",
    quote:
      "Great company to send leads. Very efficient and pleased with the services. We get lots of leads and that whats important. Support is also great from the managers/support. Thanks YPC Chat",
    author: "Mark",
    position: "Owner",
    location: "Somerset, VA",
    color: "#f27935",
  },
];

export default ReviewSection;