import { TextTitle } from "@/components/text/textTitle/TextTitle";
import discounts from "../../../../local-json/discount";
import "./discount.css";
import Buttons from "@/components/buttons/Buttons";
import Image from "next/image";
import classNames from "classnames";

const { about, phone, discount, tagline, title, destination, points } =
  discounts;

const Discount = () => {
  return (
    <section className="max-w-full mx-auto grids">
      <div className="w-full max-w-full p-10 mt-8">
        {/* Content for the first div */}
        <div className="relative">
          <Image src={about} alt="Dicount image" />
          <div className={classNames("discountText", "reey-text")}>
            35% Discount
          </div>
          <p className="booking">
            <span>Book Tour Now</span> <br /> {phone}
          </p>
        </div>
      </div>
      <div className="w-full max-w-full p-10">
        <div className="w-[170px] mb-8">
          <TextTitle textTitle="Get to know us" />
        </div>
        <div className="marqText">
          <marquee>Plan your Trip with Combined Tours and Travels</marquee>
        </div>
        <div className="z-auto -mt-10">
          <p className="z-10 text-lg font-medium text-gray-300">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don&apos;t look even slightly.
          </p>
        </div>
        <div>
          <ol className="mt-14 olcards">
            <li style={{ "--cardColor": "#36aeb3" }}>
              <div className="content">
                <div className="icon">🧳</div>
                <div className="title">Lorem Ipsum</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#162d59" }}>
              <div className="content">
                <div className="icon">🛍️</div>
                <div className="title">Lorem Ipsum</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#f15f0e" }}>
              <div className="content">
                <div className="icon">✈</div>
                <div className="title">Lorem Ipsum</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-12">
          <Buttons text="BOOK WITH US NOW" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
