import * as styles from "./ProductCards.module.css";
import { ProductCard } from "@features/products/components";

export const ProductCards = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            reviewsLength={product.reviews.length}
            images={product.images}
          />
        );
      })}
    </div>
  );
};
