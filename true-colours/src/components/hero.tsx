import { styles } from "../styles";
import { homepageCopy } from "../copy/homepageCopy";
import Logo from "../assets/Logo.webp";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div
        id="hero-container"
        style={{ marginBottom: width < 450 ? "50px" : "0" }}
      >
        <div className="hero-inner-container hero-inner-flex">
          {width > 450 ? (
            <h1
              style={{
                fontWeight: 800,
                fontSize:
                  width < 500
                    ? styles.fontSizes.midLarge
                    : styles.fontSizes.xLarge,
                margin: "0 0 2rem 0",
                padding: "0 1rem",
                color: styles.colors.background,
              }}
            >
              True Colours
            </h1>
          ) : (
            <img
              id="hero-image"
              style={{ width: width < 500 ? "55%" : "300px" }}
              src={Logo}
            />
          )}

          <p
            style={{
              fontSize:
                width < 500 ? styles.fontSizes.xSmall : styles.fontSizes.medium,
              margin: 0,
              padding: "0 1rem",
              color: styles.colors.background,
            }}
          >
            {homepageCopy.heroText} {width < 450 ? "- 07716 175317" : null}
          </p>
        </div>
        {width > 450 && (
          <div className="hero-inner-container">
            <img
              id="hero-image"
              style={{ width: width < 500 ? "55%" : "300px" }}
              src={Logo}
            />
            <h1
              style={{
                fontSize:
                  width < 500
                    ? styles.fontSizes.medium
                    : styles.fontSizes.midLarge,
                margin: 0,
                color: styles.colors.background,
              }}
            >
              07716 175317
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
