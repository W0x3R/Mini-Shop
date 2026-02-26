import { ProductCards } from "@features/products/components/ProductCards";
import { ProductsError } from "@features/products/components/ProductsError";
import { useProductsPagination } from "@features/products/hooks";
import { Button } from "@shared/ui/Button";
import { Spinner } from "@shared/ui/Spinner";
import { Text } from "@shared/ui/Text";
import clsx from "clsx";

import * as styles from "./ProductsContent.module.css";

export const ProductsContent = () => {
  const { products, isLoading, isFetching, isError, showMore, hasMore } =
    useProductsPagination(10);

  const isInitialLoading = isLoading && products.length === 0;

  if (isInitialLoading) {
    return <Spinner size={80} />;
  }

  if (!isInitialLoading && isError) {
    return <ProductsError />;
  }

  return (
    <>
      <Text
        className={clsx(styles.title, isError ? styles.error : "")}
        tag="h1"
        variant="big"
      >
        Our Products
      </Text>
      {!isInitialLoading && !isError && <ProductCards products={products} />}
      {products.length > 0 && hasMore() && !isError && (
        <Button
          className={styles["showmore-btn"]}
          onClick={showMore}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Show More"}
        </Button>
      )}
    </>
  );
};
