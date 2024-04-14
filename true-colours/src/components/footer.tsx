import Logo from "../assets/Logo.webp";
import { styles } from "../styles";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="footer-container">
      <div
        className="footer-inner-container"
        style={{ borderRight: width < 1000 ? 0 : "1px #dedede solid" }}
      >
        <img style={{ width: "80%" }} src={Logo} />
        <p style={{ padding: "10px 10px" }}>
          “DON’T MESS WITH THE REST, BOOK THE BEST”
        </p>
      </div>
      <div
        className="footer-inner-container"
        style={{
          borderRight: width < 1000 ? 0 : "1px #dedede solid",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          paddingLeft: "1rem",
          color: styles.colors.footerGrey,
          fontWeight: 200,
        }}
      >
        <p
          style={{
            fontSize: styles.fontSizes.medium,
            color: styles.colors.black,
          }}
        >
          INFO
        </p>
        <p>10 Witham Bank West, Boston, Lincs, PE21 8PU</p>
        <p>steve.truecolours@hotmail.co.uk</p>
        <p>07716 175317</p>
      </div>
      <div
        className="footer-inner-container"
        style={{
          borderRight: width < 1000 ? 0 : "1px #dedede solid",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: "1rem",
          color: styles.colors.footerGrey,
          fontWeight: 200,
        }}
      >
        <p
          style={{
            fontSize: styles.fontSizes.medium,
            color: styles.colors.black,
          }}
        >
          OUR PRIVACY POLICY
        </p>
      </div>
    </div>
  );
};

export default Footer;
