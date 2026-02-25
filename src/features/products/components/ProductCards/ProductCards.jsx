import { ProductCard } from "@features/products/components/ProductCard";

import * as styles from "./ProductCards.module.css";

export const ProductCards = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
