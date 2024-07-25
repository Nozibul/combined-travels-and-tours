import Banner from "./banner/Banner";
import BannerCards from "./bannerCard/BannerCard";
import Discount from "./discount/Discount";
import Gallery from "./gallery/Gallery";
import HomeGallery from "./homeGallery/HomeGallery";
import IconCards from "./iconCards/IconCards";
import WorkSection from "./workSection/WorkSection";

const HomePage = () => {
     return (
          <>
               <Banner />
               <Gallery />
               {/* <HomeGallery /> */}
               <WorkSection />
               <Discount />
               <BannerCards />
               <IconCards />
               <h1 className="text-3xl font-bold">Home Page</h1>
               <h1 className="text-3xl font-bold">Home Page</h1>
               <h1 className="text-3xl font-bold">Home Page</h1>
          </>
     );
};
export default HomePage;
