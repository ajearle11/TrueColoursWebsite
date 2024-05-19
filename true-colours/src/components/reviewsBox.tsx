import useWindowDimensions from "../hooks/useWindowDimensions";
import { styles } from "../styles";
import StarIcon from '@mui/icons-material/Star';

type IReviewsBox = {
  title: string;
  text: string;
  author: string;
};

const ReviewsBox = ({title, text, author}: IReviewsBox) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <h1
        style={{
            
          color: styles.colors.grey,
          fontSize:
            width > 500 ? styles.fontSizes.midLarge : styles.fontSizes.medium,
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        "{title}"
      </h1>
        <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
          <StarIcon style={{color: "#FFD700", marginRight: "5px"}}/>
          <StarIcon style={{color: "#FFD700", marginRight: "5px"}}/>
          <StarIcon style={{color: "#FFD700", marginRight: "5px"}}/>
          <StarIcon style={{color: "#FFD700", marginRight: "5px"}}/>
          <StarIcon style={{color: "#FFD700"}}/>
        </div>
      <p
        style={{
          fontSize:
            width > 500 ? styles.fontSizes.medium : styles.fontSizes.small,
          fontWeight: 400,
          color: styles.colors.grey,
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {text}
      </p>
      <p
        style={{
          fontSize:
            width > 500 ? styles.fontSizes.medium : styles.fontSizes.small,
          fontWeight: 700,
          marginBottom: 0,
          color: styles.colors.grey,
        }}
      >
        {author}
      </p>
      <p
        style={{
          fontSize:
            width > 500 ? styles.fontSizes.small : styles.fontSizes.xSmall,
          fontWeight: 400,
          color: styles.colors.grey,
          marginBottom: "20px",
          fontStyle: "italic",
        
        }}
      >
        Review Submitted on Google
      </p>
      
    </>
  );
};

export default ReviewsBox;
