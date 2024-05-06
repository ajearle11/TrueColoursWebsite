import useWindowDimensions from "../hooks/useWindowDimensions";
import { styles } from "../styles";

type IMapTitleText = {
  title: string;
  text: string;
};

const PricesQuoteBox = () => {
  const items: Array<IMapTitleText> = [
    {
      title: "Carpet Cleans",
      text: "£40",
    },
    {
      title: "Rug Cleans",
      text: "£25",
    },
    {
      title: "3 Piece Suites",
      text: "£95",
    },
    {
      title: "Halls, Stairs and Landing",
      text: "£55",
    },
  ];

  const mapPrices = () => {
    return items.map((item, index) => {
      return (
        <div
          style={{
            border: `1px solid ${styles.colors.yellow}`,
            backgroundClip: "white",
            height: "200px",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTopLeftRadius:
              width > 900 && index === 0
                ? "8px"
                : width > 550 && width < 900 && index === 0
                ? "8px"
                : width < 550 && index === 0
                ? "8px"
                : 0,
            borderTopRightRadius:
              width > 900 && index === 3
                ? "8px"
                : width > 550 && width < 900 && index === 1
                ? "8px"
                : width < 550 && index === 0
                ? "8px"
                : 0,
            borderBottomLeftRadius:
              width > 900 && index === 0
                ? "8px"
                : width > 550 && width < 900 && index === 2
                ? "8px"
                : width < 550 && index === 3
                ? "8px"
                : 0,
            borderBottomRightRadius:
              width > 900 && index === 3
                ? "8px"
                : width > 550 && width < 900 && index === 3
                ? "8px"
                : width < 550 && index === 3
                ? "8px"
                : 0,
            justifyContent: "center",
            background: "white",
          }}
        >
          <p
            style={{
              fontSize:
                width > 500 ? styles.fontSizes.medium : styles.fontSizes.small,
              fontWeight: 400,
              color: styles.colors.black,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              fontSize:
                width > 500
                  ? styles.fontSizes.midLarge
                  : styles.fontSizes.medium,
              fontWeight: 400,
              color: styles.colors.black,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {item.text}
          </p>
          <p
            style={{
              fontSize: styles.fontSizes.small,
              fontWeight: 400,
              color: styles.colors.black,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            (starting price)
          </p>
        </div>
      );
    });
  };

  const { width } = useWindowDimensions();

  const numColumns = width > 900 ? 4 : width > 550 ? 2 : 1;

  return (
    <div
      id="prices-quote-box"
      style={{
        display: "grid",
        width: width < 350 ? "200px" : undefined,
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        justifyContent: "center",
      }}
    >
      {mapPrices()}
    </div>
  );
};

export default PricesQuoteBox;
