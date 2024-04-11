type HomeImageBoxProps = {
  children: JSX.Element;
  image: JSX.Element;
};

const HomeImageBox = ({ children, image }: HomeImageBoxProps) => {
  return (
    <div className="homepage-image-box-container">
      {children.props.aligned == "start" ? (
        <>
          <div style={{ width: "50%" }}>{image}</div>
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
            style={{ width: "50%", left: "7.5%" }}
            className="image-box-transparency-container"
          >
            {children}
          </div>
          <div style={{ width: "50%" }}>{image}</div>
        </>
      )}
    </div>
  );
};

export default HomeImageBox;
