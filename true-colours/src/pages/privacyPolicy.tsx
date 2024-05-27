import { useNavigate } from "react-router-dom";
import { Hero, PrivacyPolicyQuoteBox } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PrivacyPolicy = () => {
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
