import { useState, useEffect } from "react";
import { ReviewsBox } from "./";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <>
      <div id="reviews-quote-box">
        <div style={{ display: "flex", alignItems: "center", width: '100%'}}>
          <div className="previous-next-buttons" onClick={prevSlide}>
            <ChevronLeftIcon style={{ color: "white" }} />
          </div>
          <div className="slider">
            <div
              className="slides"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              <div className="slide">
                <ReviewsBox
                  title="Would definitely recommend 100%"
                  text="Just had my three piece suite and carpet cleaned by Steve. Arrived on time, got on with the job professionally, so impressed with the results. Would definitely recommend 100 per cent."
                  author="Mary Hennen"
                />
              </div>
              <div className="slide">
                <ReviewsBox
                  title="My tired old carpets have a new lease of life"
                  text="I highly recommend this firm. The treatment really does make a difference to the carpets. The house feels and looks cleaner and fresher. My tired old carpets have a new lease of life. Steve is friendly, professional and trustworthy. He takes the time to do a really thorough job. Worth every penny."
                  author="Martin Almond"
                />
              </div>
              <div className="slide">
                <ReviewsBox
                  title="What a difference"
                  text="Very good, polite and great job what a difference truly recommended"
                  author="Duarte Pinto"
                />
              </div>
            </div>
          </div>
          <div className="previous-next-buttons" onClick={nextSlide}>
            <ChevronRightIcon style={{ color: "white" }} />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <span
            style={{
              height: "10px",
              width: "10px",
              border: "1px solid #717171",
              backgroundColor: slideIndex === 0 ? "#717171" : "#fff",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 5px",
            }}
          ></span>
          <span
            style={{
              height: "10px",
              width: "10px",
              border: "1px solid #717171",
              backgroundColor: slideIndex === 1 ? "#717171" : "#fff",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 5px",
            }}
          ></span>
          <span
            style={{
              height: "10px",
              width: "10px",
              border: "1px solid #717171",
              backgroundColor: slideIndex === 2 ? "#717171" : "#fff",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 5px",
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Slider;
