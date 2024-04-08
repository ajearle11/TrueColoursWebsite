import { TransparentBox, RequestQuoteBox } from "../components";
import { homepageCopy } from "../copy/homepageCopy";
import Year from "../assets/Year.webp";
import Rainbow from "../assets/Rainbow-Carpet.webp";
import Reviews from "../assets/Reviews.webp";

const Homepage = () => {
  return (
    <div>
      <RequestQuoteBox />
      
      <TransparentBox
        headerText="About"
        aligned="start"
        bodyText={homepageCopy.aboutTransparentBoxText}
        linkText="Tell me more"
      />
      <TransparentBox
        headerText="Prices"
        aligned="end"
        bodyText={homepageCopy.pricesTransparentBoxText}
        linkText="Tell me more"
      />
      <TransparentBox
        headerText="Reviews"
        aligned="start"
        bodyText={homepageCopy.reviewsTransparentBoxText}
        linkText="Tell me more"
      />
      <img className="homepage-image" src={Year} />
      <img className="homepage-image" src={Rainbow} />
      <img className="homepage-image" src={Reviews} />
    </div>
  );
};

export default Homepage;
