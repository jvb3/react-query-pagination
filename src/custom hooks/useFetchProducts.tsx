import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchProducts = async (pageParam: number) => {
  const response = await fetch(
    `https://dummyjson.com/products/?limit=3&skip=${pageParam}&select=title,price,thumbnail,description`
  );

  return response.json();
};

const useFetchProducts = (pageParam: number) => {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ["products", pageParam],
    queryFn: () => fetchProducts(pageParam),
    placeholderData: keepPreviousData,
  });

  return { data, error, isError, isLoading, isFetching};
};

export default useFetchProducts;
