import { Hero, Slider } from "../components";

const Reviews = () => {
  return (
    <>
      <Hero
        title="Our Reviews"
        innerText="True Colours are the most highly recommended Carpet and Upholstery Cleaner in Boston and here’s why…"
      />
      <div className="about-container">
        <Slider />
      </div>
    </>
  );
};

export default Reviews;
