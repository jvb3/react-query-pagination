import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (pageParam: number) => {
  const response = await fetch(
    `https://dummyjson.com/products/?limit=3&skip=${pageParam}&select=title,price,thumbnail,description`
  );

  return response.json();
};

const useFetchProducts = (pageParam: number) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["products", pageParam],
    queryFn: () => fetchProducts(pageParam),
  });

  return { data, error, isError, isLoading };
};

export default useFetchProducts;
