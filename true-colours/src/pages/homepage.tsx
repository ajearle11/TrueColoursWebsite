import {
  TransparentBox,
  RequestQuoteBox,
  Hero,
  HomeImageBox,
  Footer,
} from "../components";
import { homepageCopy } from "../copy/homepageCopy";
import Year from "../assets/Year.webp";
import Rainbow from "../assets/Rainbow-Carpet.webp";
import Reviews from "../assets/Reviews.webp";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Homepage = () => {
  const {width} = useWindowDimensions();
  return (
    <>
      <>
        <Hero />
        <div id="homepage-container">
          <RequestQuoteBox />

          <HomeImageBox
            children={
              <TransparentBox
                headerText="About"
                aligned={width > 768 ? "start" : 'center'}
                bodyText={homepageCopy.aboutTransparentBoxText}
                linkText="Tell me more"
                toUrl="/about"
              />
            }
            image={<img className="homepage-image" src={Year} />}
          />
          <HomeImageBox
            children={
              <TransparentBox
                headerText="Prices"
                aligned={width > 768 ? "end" : 'center'}
                bodyText={homepageCopy.pricesTransparentBoxText}
                linkText="Tell me more"
                toUrl="/prices"
              />
            }
            image={<img className="homepage-image" src={Rainbow} />}
          />
          <HomeImageBox
            children={
              <TransparentBox
                headerText="Reviews"
                aligned={width > 768 ? "start" : 'center'}
                bodyText={homepageCopy.reviewsTransparentBoxText}
                linkText="Tell me more"
                toUrl="/reviews"
              />
            }
            image={<img className="homepage-image" src={Reviews} />}
          />
        </div>
      </>
      <Footer />
    </>
  );
};

export default Homepage;
