import { styles } from "../styles";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { aboutPageCopy } from "../copy/homepageCopy";

type IMapTitleText = {
  title: string;
  text: string;
};

const InformationQuoteBox = () => {
  const { width } = useWindowDimensions();

  const values: Array<IMapTitleText> = [
    {
      title: "",
      text: aboutPageCopy.getToKnowUsText,
    },
    {
      title: "A Personal Touch",
      text: aboutPageCopy.aPersonalTouchText,
    },
    {
      title: "Residential and Commerical",
      text: aboutPageCopy.residentialAndCommericalText,
    },
    {
      title: "Local Carpet Cleaner Near You",
      text: aboutPageCopy.localCarpetCleanerText,
    },
  ];

  const places: Array<string> = [
    "Boston",
    "Spalding",
    "Sleaford",
    "Spilsby",
    "Sibsey",
    "Holbeach",
    "Louth",
    "Stickney",
    "Horncastle",
    "Skegness",
    "Wisbech",
    "Donnington",
  ];

  const mapValues = () => {
    return values.map((value) => {
      return (
        <>
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

  const mapPlaces = () => {
    return places.map((place) => {
      return (
        <li
          style={{
            textAlign: "start",
            fontSize: styles.fontSizes.small,
            fontWeight: 400,
            lineHeight: "1.75rem",
            marginBottom: "10px",
            color: styles.colors.grey,
          }}
        >
          {place}
        </li>
      );
    });
  };

  return (
    <div id="information-quote-box">
      <h1
        style={{
          fontSize:
            width > 500 ? styles.fontSizes.large : styles.fontSizes.medium,
          fontWeight: 700,
          marginBottom: "-20px",
        }}
      >
        Get to know us...
      </h1>
      {mapValues()}
      {mapPlaces()}
      <p
        style={{
          textAlign: "start",
          fontSize: styles.fontSizes.small,
          fontWeight: 400,
          lineHeight: "1.75rem",
          color: styles.colors.grey,
        }}
      >
        Or anywhere in between.
      </p>
    </div>
  );
};

export default InformationQuoteBox;
