import ProductCard from './components/ProductCard';
import Title from './components/ProductsTitle';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/ProductImage';
import Wrapper from './components/Wrapper';
import Loader from "./components/Loader"
import useFetchProducts from './custom hooks/useFetchProducts';
import useCurrentProducts from './custom hooks/useCurrentProducts';

function App() {
  const { currentProducts, handleNextProducts, handlePreviousProducts } =
    useCurrentProducts();

  const { data, isError, isLoading, error, isFetching } = useFetchProducts(currentProducts);


  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <>
      <Wrapper>
        {data?.products?.map((product) => {
          return (
            <ProductCard key={product.id}>
              <Title key={product.title} title={product.title} />
              <Image key={product.thumbnail} imageSrc={product.thumbnail} />
              <Price key={product.price} price={product.price} />
              <Description
                key={product.description}
                description={product.description}
              />

            </ProductCard>
          );
        })}
        <div className="flex gap-4">
          <button
            className="text-center px-4 py-2 bg-pink-600 text-white"
            onClick={handlePreviousProducts}
            disabled={currentProducts === 0}
          >
            Previous
          </button>
          <button
            className="text-center px-4 py-2 bg-pink-600 text-white"
            onClick={handleNextProducts}
            disabled={currentProducts >= 30}
          >
            Next
          </button>
          <Loader isLoading={isLoading} isFetching={isFetching}/>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
