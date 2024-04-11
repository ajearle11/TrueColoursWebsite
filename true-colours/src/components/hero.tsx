import { styles } from "../styles";
import { homepageCopy } from "../copy/homepageCopy";
import Logo from "../assets/Logo.webp";

const Hero = () => {
  return (
    <>
      <div id="hero-container">
        <div
          className="hero-inner-container"
          style={{ alignItems: "flex-start" }}
        >
          <h1
            style={{
              fontWeight: 800,
              fontSize: styles.fontSizes.xLarge,
              margin: "0 0 2rem 0",
              color: styles.colors.background,
            }}
          >
            True Colours
          </h1>
          <p
            style={{
              fontSize: styles.fontSizes.medium,
              margin: 0,
              color: styles.colors.background,
            }}
          >
            {homepageCopy.heroText}
          </p>
        </div>
        <div className="hero-inner-container">
          <img id="hero-image" src={Logo} />
          <h1
            style={{
              fontSize: styles.fontSizes.midLarge,
              margin: 0,
              color: styles.colors.background,
            }}
          >
            07716 175317
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
