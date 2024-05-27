import { useNavigate } from "react-router-dom";
import { Hero, PricesQuoteBox } from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { styles } from "../styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Prices = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          zIndex: 1000,
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon /> Homepage
      </div>
      <Hero
        title="Our Prices"
        innerText="Please use the price list provided below as a rough guide. The quickest way to get an accurate quote is to call us on the number provided or by emailing:"
        boldText="steve.truecolours@hotmail.co.uk"
      />
      <div className="about-container">
        <PricesQuoteBox />

        <p
          style={{
            fontSize:
              width > 500 ? styles.fontSizes.midLarge : styles.fontSizes.medium,
            fontWeight: 700,
            color: styles.colors.black,
            marginTop: "-20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          ** FREE DEODORISER TREATMENT WITH ANY BOOKINGS OVER £75 **
        </p>
        <p
          style={{
            fontSize:
              width > 500 ? styles.fontSizes.medium : styles.fontSizes.small,
            fontWeight: 400,
            color: styles.colors.black,
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          Offer Valid until: 30/06/24
        </p>
      </div>
    </>
  );
};

export default Prices;
