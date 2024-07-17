import { TextTitle } from "@/components/text/textTitle/TextTitle";
import discounts from "../../../../local-json/discount";
import "./discount.css";
import { TextHeader } from "@/components/text/textHeader/TextHeader";
import Buttons from "@/components/buttons/Buttons";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
} = discounts;

const Discount = () => {
  return (
    <section className="max-w-full mx-auto grids">
      <div className="w-full max-w-full p-12 border">
        {/* Content for the first div */}
      </div>
      <div className="w-full max-w-full p-10 border">
        <div className="w-[170px] mb-8">
          <TextTitle textTitle="Get to know us" />
        </div>
        <div className="marqText">
          <marquee>Plan your Trip with Combined Tours and Travels</marquee>
        </div>
        <div className="z-auto -mt-10">
          <p className="z-10 text-lg font-medium text-gray-400">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don&apos;t look even slightly.
          </p>
        </div>
        <div>
          <ol className="mt-8 olcards">
            <li style={{ "--cardColor": "#36aeb3" }}>
              <div className="content">
                <div className="icon">🧳</div>
                <div className="title">Lorem Ipsum</div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#718096" }}>
              <div className="content">
                <div className="icon">✈</div>
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
