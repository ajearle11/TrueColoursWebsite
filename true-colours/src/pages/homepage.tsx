import {
  TransparentBox,
  RequestQuoteBox,
  Hero,
  HomeImageBox,
} from "../components";
import { homepageCopy } from "../copy/homepageCopy";
import Year from "../assets/Year.webp";
import Rainbow from "../assets/Rainbow-Carpet.webp";
import Reviews from "../assets/Reviews.webp";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div id="homepage-container">
        <RequestQuoteBox />

        <HomeImageBox
          children={
            <TransparentBox
              headerText="About"
              aligned="start"
              bodyText={homepageCopy.aboutTransparentBoxText}
              linkText="Tell me more"
            />
          }
          image={<img className="homepage-image" src={Year} />}
        />
        <HomeImageBox
          children={
            <TransparentBox
              headerText="Prices"
              aligned="end"
              bodyText={homepageCopy.pricesTransparentBoxText}
              linkText="Tell me more"
            />
          }
          image={<img className="homepage-image" src={Rainbow} />}
        />
        <HomeImageBox
          children={
            <TransparentBox
              headerText="Reviews"
              aligned="start"
              bodyText={homepageCopy.reviewsTransparentBoxText}
              linkText="Tell me more"
            />
          }
          image={<img className="homepage-image" src={Reviews} />}
        />
      </div>
    </>
  );
};

export default Homepage;
