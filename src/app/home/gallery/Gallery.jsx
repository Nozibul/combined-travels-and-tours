import { TextTitle } from "@/components/text/textTitle/TextTitle";
import "./gallery.css";
import { TextHeader } from "@/components/text/textHeader/TextHeader";
const HomeGallery = () => {
  return (
    <>
      <div className="mx-auto mt-20 mb-20 ">
        <TextTitle textTitle="Destination lists" />
        <TextHeader textHeader="Go Exotic Places" tSize="text-3xl" />

        {/* <h2>Sadie</h2> */}
        <div className="grid grid-cols-3 p-8">
          <figure className="effect-sadie">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>
                Holy <span>Sadie</span>
              </h2>
              <p>
                Sadie never took her eyes off me. <br />
                She had a dark soul.
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-sadie">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg"
              alt="img14"
            />
            <figcaption>
              <h2>
                Holy <span>Sadie</span>
              </h2>
              <p>
                Sadie never took her eyes off me. <br />
                She had a dark soul.
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-sadie">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg"
              alt="img02"
            />
            <figcaption>
              <h2>
                Holy <span>Sadie</span>
              </h2>
              <p>
                Sadie never took her eyes off me. <br />
                She had a dark soul.
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          

          {/* effect-layla */}
          <figure className="effect-layla">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg"
              alt="img06"
            />
            <figcaption>
              <h2>
                Crazy <span>Layla</span>
              </h2>
              <p>When Layla appears, she brings an eternal summer along.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-layla">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg"
              alt="img03"
            />
            <figcaption>
              <h2>
                Crazy <span>Layla</span>
              </h2>
              <p>When Layla appears, she brings an eternal summer along.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-layla">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg"
              alt="img06"
            />
            <figcaption>
              <h2>
                Crazy <span>Layla</span>
              </h2>
              <p>When Layla appears, she brings an eternal summer along.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          

          {/* effect-bubba */}
          <figure className="effect-bubba">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg"
              alt="img17"
            />
            <figcaption>
              <h2>
                Gorgeous <span>Bubba</span>
              </h2>
              <p>Bubba likes to appear out of thin air.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-bubba">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg"
              alt="img18"
            />
            <figcaption>
              <h2>
                Gorgeous <span>Bubba</span>
              </h2>
              <p>Bubba likes to appear out of thin air.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-bubba">
            <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg"
              alt="img17"
            />
            <figcaption>
              <h2>
                Gorgeous <span>Bubba</span>
              </h2>
              <p>Bubba likes to appear out of thin air.</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
