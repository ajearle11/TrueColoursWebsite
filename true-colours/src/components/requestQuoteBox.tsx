import { styles } from "../styles";

const RequestQuoteBox = () => {
  return (
    <div id="request-quote-box">
      <h1 style={{ fontSize: styles.fontSizes.large, fontWeight: 400 }}>
        Request Your Free Quote
      </h1>
      <p
        style={{
          fontSize: styles.fontSizes.small,
          fontWeight: 400,
          color: styles.colors.grey,
        }}
      >
        Typically, quality comes at a cost, but not with True Colours. Tell us
        what you need cleaning and we’ll come back to you within 1 working day.
      </p>
      {/* // The form will go here */}
    </div>
  );
};

export default RequestQuoteBox;
