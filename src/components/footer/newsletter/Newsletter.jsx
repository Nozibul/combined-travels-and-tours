"use client";
import Buttons from "@/components/buttons/Buttons";
import { TextTitle } from "@/components/text/textTitle/TextTitle";
import { RiCheckboxCircleFill } from "react-icons/ri";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Here you can add your logic to send the email to the database
    console.log("Email submitted:", email);

    // Reset the email input after submission
    setEmail("");
  };

  return (
    <div className="border-[1px] border-gray-500 rounded-[10px] w-full flex flex-col px-2 py-4 min-h-[15em] transition-all duration-500 hover:bg-[#b0b7c412] hover:opacity-75 hover:border-[#2f3a4e6b]">
      <div className="mb-6 underline-element">
        <TextTitle textTitle="Newsletter" />
      </div>
      <span className="mb-4 text-sm text-gray-300">
        Don’t miss to subscribe to our new feeds, kindly fill the form below.
      </span>
      <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email id here"
          className="p-4 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state for email
        />
        <Buttons text="Subscribe" width="279px" height="40px" />

        {/* <button
          type="submit"
          className="p-4 text-white bg-yellow-500 rounded hover:bg-yellow-600"
        >
          Subscribe
        </button> */}
      </form>
      <div className="flex items-center mt-4">
        <span className="mr-2 text-lg text-gray-400">
          <RiCheckboxCircleFill />
        </span>
        <span className="text-sm text-gray-400">
          I agree to all terms and policies
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
