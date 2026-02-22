import * as styles from "./ProductCard.module.css";
import ratingLogo from "@assets/images/ratingLogo.svg?url";
import reviewLogo from "@assets/images/reviewLogo.svg?url";
import { Text } from "@shared/ui";
import { ProductGallery } from "@features/products/components";

export const ProductCard = ({
  id,
  title,
  description,
  price,
  rating,
  reviewsLength,
  images,
}) => {
  return (
    <article className={styles.product} data-product-id={id}>
      <ProductGallery images={images} title={title} />
      <Text className={styles["product-title"]} variant="h2">
        {title}
      </Text>
      <Text className={styles["product-description"]} variant="p">
        {description}
      </Text>
      <Text className={styles["product-price"]} variant="p">
        {`${price} $`}
      </Text>
      <div className={styles["product-additional-info"]}>
        <Text className={styles["product-rating"]} variant="p">
          <img width={14} height={14} src={ratingLogo} />
          <span>{rating}</span>
        </Text>
        <Text className={styles["product-reviews"]} variant="p">
          <img width={14} height={14} src={reviewLogo} />
          <span>{reviewsLength} reviews</span>
        </Text>
      </div>
    </article>
  );
};
