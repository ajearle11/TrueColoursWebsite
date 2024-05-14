import React from "react";
import { privacyPolicyCopy } from "../copy/homepageCopy";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { styles } from "../styles";

type IMapTitleText = {
  title: string;
  text: string | JSX.Element[];
};

const PrivacyPolicyQuoteBox = () => {
  const { width } = useWindowDimensions();

  function formatText(text: string): JSX.Element[] {
    return text.split("\n").map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }

  const values: Array<IMapTitleText> = [
    {
      title: "Your Choices",
      text: privacyPolicyCopy.yourChoicesText,
    },
    {
      title: "Changes To This Policy",
      text: privacyPolicyCopy.changesToThisPolicyText,
    },
    {
      title: "Contact Us",
      text: privacyPolicyCopy.contactUsText,
    },
    {
      title: "",
      text: formatText(privacyPolicyCopy.address),
    },
    {
      title: "",
      text: privacyPolicyCopy.trustInText,
    },
  ];

  const mapValues = () => {
    return values.map((value) => {
      return (
        <>
          {value.title && (
            <p
              style={{
                fontSize:
                  width > 500
                    ? styles.fontSizes.midLarge
                    : styles.fontSizes.medium,
                fontWeight: 400,
                color: styles.colors.grey,
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "start",
              }}
            >
              {value.title}
            </p>
          )}
          <p
            style={{
              textAlign: "start",
              fontSize: styles.fontSizes.small,
              fontWeight: 400,
              lineHeight: "1.75rem",
              color: styles.colors.grey,
            }}
          >
            {value.text}
          </p>
        </>
      );
    });
  };

  return <div id="information-quote-box">{mapValues()}</div>;
};

export default PrivacyPolicyQuoteBox;
