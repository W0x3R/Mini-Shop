import * as styles from "./Products.module.css";
import { Container, Text } from "@shared/ui";
import { useGetProductsQuery } from "@shared/api";
import { ProductCards } from "@features/products/components";
import { useEffect, useState } from "react";
import { Button } from "@shared/ui";

export const Products = () => {
  const [page, setPage] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: 10,
    skip: page * 10,
  });

  const handleShowMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!data?.products) return;

    if (page === 0) {
      setAllProducts(data.products);
    } else {
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  return (
    <section className={styles.products}>
      <Container className={styles.wrapper}>
        <Text className={styles.title} variant="h1">
          Our Products
        </Text>
        <ProductCards products={allProducts} />
        {data?.total > allProducts.length && (
          <Button
            className={styles["showmore-btn"]}
            onClick={handleShowMore}
            disabled={isLoading}
          >
            Show More
          </Button>
        )}
      </Container>
    </section>
  );
};
