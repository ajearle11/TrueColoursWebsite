import { Hero, PrivacyPolicyQuoteBox } from "../components";

const PrivacyPolicy = () => {
  return (
    <>
      <Hero
        title="Privacy Policy"
        innerText="Our privacy policy explained nice and simply"
      />
      <div className="about-container">
        <PrivacyPolicyQuoteBox />
      </div>
    </>
  );
};

export default PrivacyPolicy;
