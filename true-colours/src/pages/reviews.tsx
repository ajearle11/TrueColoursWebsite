import { useNavigate } from "react-router-dom";
import { Hero, Slider } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Reviews = () => {
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
