import { Link } from "react-router-dom";
import { styles } from "../styles";
import useWindowDimensions from "../hooks/useWindowDimensions";

type TransparentBoxProps = {
  aligned: "start" | "center" | "end";
  bodyText: string;
  linkText: string;
  headerText: string;
  toUrl: string;
};

const TransparentBox = (props: TransparentBoxProps) => {
  const { width } = useWindowDimensions();
  return (
    <div
      id="transparent-box-container"
      style={{
        alignItems: props.aligned,
        textAlign: props.aligned,
        backgroundColor: styles.colors.backgroundTransparent,
      }}
    >
      <h1
        style={{
          fontSize:
            width > 500 ? styles.fontSizes.xxLarge : styles.fontSizes.large,
          fontWeight: 400,
          margin: "0 0 25px",
        }}
      >
        {props.headerText}
      </h1>
      <p
        style={{
          fontWeight: 500,
          color: styles.colors.grey,
          fontSize: styles.fontSizes.medium,
          margin: "0 0 25px",
        }}
      >
        {props.bodyText}
      </p>
      <Link className="link-component" to={props.toUrl}>
        {props.linkText}
      </Link>
    </div>
  );
};

export default TransparentBox;
