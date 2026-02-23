import { useDispatch, useSelector } from "react-redux";
import * as styles from "./ProductCard.module.css";
import ratingLogo from "@assets/images/ratingLogo.svg?url";
import reviewLogo from "@assets/images/reviewLogo.svg?url";
import cartLogo from "@assets/images/cart.svg?url";
import { Text, Button } from "@shared/ui";
import { ProductGallery } from "@features/products/components";
import { addToCart } from "@features/cart/store";
import { notifySuccess } from "@shared/lib";

export const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    rating,
    reviewsLength = product.reviews.length,
    images,
  } = product;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleAddToCard = (id) => {
    dispatch(
      addToCart({
        userId: currentUser.id,
        product,
      }),
    );
    notifySuccess("Product added to cart");
  };

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
      <Button
        className={styles["add-to-cart-btn"]}
        onClick={() => handleAddToCard(id)}
        title="Add to cart"
      >
        <img
          className={styles["cart-logo"]}
          src={cartLogo}
          width={26}
          height={26}
          alt="Add to cart logo"
        />
      </Button>
    </article>
  );
};
