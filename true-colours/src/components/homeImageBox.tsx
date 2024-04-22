import { useEffect, useRef } from "react";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

type HomeImageBoxProps = {
  children: JSX.Element;
  image: JSX.Element;
};

const HomeImageBox = ({ children, image }: HomeImageBoxProps) => {
  const { width } = useWindowDimensions();
  const [isVisible, setVisible] = useState<boolean>(true);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const currentDomRef = domRef.current;
    if (currentDomRef) {
      observer.observe(currentDomRef);
    }
    return () => {
      if (currentDomRef) {
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return (
    <div className="homepage-image-box-container">
      {width > 768 ? (
        children.props.aligned == "start" ? (
          <>
            <div
              ref={domRef}
              className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
              style={{ width: "50%" }}
            >
              {image}
            </div>

            <div
              style={{ width: "50%", right: "7.5%" }}
              className="image-box-transparency-container"
            >
              {children}
            </div>
          </>
        ) : (
          <>
            <div
              style={{ width: "50%", left: "7.5%", zIndex: 100 }}
              className="image-box-transparency-container"
            >
              {children}
            </div>
            <div
              ref={domRef}
              className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
              style={{ width: "50%" }}
            >
              {image}
            </div>
          </>
        )
      ) : (
        <>
          <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            style={{ width: "50%" }}
          >
            {image}
          </div>

          <div
            style={{ width: '100%'}}
            className="image-box-transparency-container"
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeImageBox;
