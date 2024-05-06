import { Hero, InformationQuoteBox } from "../components";

const About = () => {
  return (
    <>
      <Hero
        title="About Us"
        innerText="Meet your trusted and quality assured carpet and upholstery cleaner that’s just down the road."
      />
      <div className="about-container">
        <InformationQuoteBox />
      </div>
    </>
  );
};

export default About;
