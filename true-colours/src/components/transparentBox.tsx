import { Link } from "react-router-dom";
import { styles } from "../styles";

type TransparentBoxProps = {
  aligned: "start" | "center" | "end";
  bodyText: string;
  linkText: string;
  headerText: string;
};

const TransparentBox = (props: TransparentBoxProps) => {
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
          fontSize: styles.fontSizes.xxLarge,
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
      <Link className="link-component" to="/">
        {props.linkText}
      </Link>
    </div>
  );
};

export default TransparentBox;
