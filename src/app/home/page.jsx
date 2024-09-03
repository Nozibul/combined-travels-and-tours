import Banner from "./banner/Banner";
import BannerCards from "./bannerCard/BannerCard";
import Blog from "./blog/Blog";
import CardSection from "./cardSection/CardSection";
import Discount from "./discount/Discount";
import Gallery from "./gallery/Gallery";
import HomeGallery from "./homeGallery/HomeGallery";
import IconCards from "./iconCards/IconCards";
import ParallaxSection from "./parallaxSection/ParallaxSection";
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
               <CardSection />
               <Blog />
               <ParallaxSection />
               <h1 className="text-3xl font-bold mt-14 ">Home Page</h1>          
          </>
     );
};
export default HomePage;
