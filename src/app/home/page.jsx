import Banner from "./banner/Banner";
import Discount from "./discount/Discount";
import Gallery from "./gallery/Gallery";
import HomeGallery from "./homeGallery/HomeGallery";
import WorkSection from "./workSection/WorkSection";

const HomePage = () => {
     return (
          <>
               <Banner />
               <Gallery />
               {/* <HomeGallery /> */}
               <WorkSection />
               <Discount />
               <h1 className="text-3xl font-bold">Home Page</h1>
               <h1 className="text-3xl font-bold">Home Page</h1>
               <h1 className="text-3xl font-bold">Home Page</h1>
          </>
     );
};
export default HomePage;
