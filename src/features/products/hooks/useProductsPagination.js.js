import { useEffect, useState } from "react";
import { useGetProductsQuery } from "@shared/api";

export const useProductsPagination = (limit) => {
  const [page, setPage] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const { data, isLoading, isFetching, isError } = useGetProductsQuery({
    limit,
    skip: page * limit,
  });

  useEffect(() => {
    if (!data?.products) return;

    if (page === 0) {
      setAllProducts(data.products);
    } else {
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  const showMore = () => {
    if (!isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = () => {
    if (!data?.total) return false;
    return allProducts.length < data.total;
  };

  return {
    products: allProducts,
    isLoading,
    isFetching,
    isError,
    showMore,
    hasMore,
  };
};
