import clsx from "clsx";
import * as styles from "./Products.module.css";
import { Container, Text, Button, Spinner } from "@shared/ui";
import { ProductCards, ProductsError } from "@features/products/components";
import { useProductsPagination } from "@features/products/hooks";

export const Products = () => {
  const { products, isLoading, isFetching, isError, showMore, hasMore } =
    useProductsPagination(10);

  const isInitialLoading = isLoading && products.length === 0;

  return (
    <section className={styles.products}>
      <Container className={styles.wrapper}>
        <Text
          className={clsx(styles.title, isError ? styles.error : "")}
          variant="h1"
        >
          Our Products
        </Text>
        {isInitialLoading && <Spinner size={80} />}
        {!isInitialLoading && isError && <ProductsError />}
        {!isInitialLoading && !isError && <ProductCards products={products} />}
        {products.length > 0 && hasMore && !isError && (
          <Button
            className={styles["showmore-btn"]}
            onClick={showMore}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Show More"}
          </Button>
        )}
      </Container>
    </section>
  );
};
