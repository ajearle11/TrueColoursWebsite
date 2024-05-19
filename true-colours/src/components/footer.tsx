import Logo from "../assets/Logo.webp";
import { styles } from "../styles";
import useWindowDimensions from "../hooks/useWindowDimensions";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GoogleLogo from "../assets/google-logo.svg";

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="footer-container">
      <div
        className="footer-inner-container"
        style={{
          borderRight: width < 1000 ? 0 : "1px #dedede solid",

          padding: width < 1000 ? "1rem" : "0 0 0 1rem",
        }}
      >
        <img
          style={{
            maxWidth: width < 1000 ? "300px" : "100%",
            width: width < 1000 ? "75%" : "80%",
            margin: width < 1000 ? "1rem" : "0",
          }}
          src={Logo}
        />
        <p style={{ padding: "10px 10px" }}>
          “DON’T MESS WITH THE REST, BOOK THE BEST”
        </p>
      </div>
      <div
        className="footer-inner-container"
        style={{
          borderRight: width < 1000 ? 0 : "1px #dedede solid",
          alignItems: width < 1000 ? "center" : "flex-start",
          justifyContent: "space-evenly",
          padding: width < 1000 ? "1rem" : "0 0 0 1rem",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <EmailIcon />
          <p>10 Witham Bank West, Boston, Lincs. PE21 8PU</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhoneAndroidIcon />
          <p>steve.truecolours&#8203;@hotmail.co.uk</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocationOnIcon />
          <p>07716 175317</p>
        </div>
      </div>
      <div
        className="footer-inner-container"
        style={{
          borderRight: width < 1000 ? 0 : "1px #dedede solid",
          alignItems: width < 1000 ? "center" : "flex-start",
          justifyContent: "flex-start",
          padding: width < 1000 ? "1rem" : "0 0 0 1rem",
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
        <a href="https://plus.google.com/u/2/109280316400365629341">
          <img src={GoogleLogo} style={{ width: "30px", marginTop: "10px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
