import { useNavigate } from "react-router-dom";
import { Hero, InformationQuoteBox } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const About = () => {
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
          alignItems: "center"
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon /> Homepage
      </div>
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
