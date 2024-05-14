import { useState, useEffect } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div id="information-quote-box">
      <div className="slider">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div
          className="slides"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          <div className="slide">Slide 1</div>
          <div className="slide">Slide 2</div>
          <div className="slide">Slide 3</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
