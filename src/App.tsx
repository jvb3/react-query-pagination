import ProductCard from './components/ProductCard';
import Title from './components/ProductsTitle';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/ProductImage';
import Wrapper from './components/Wrapper';
import Loader from "./components/Loader"
import useFetchProducts from './custom hooks/useFetchProducts';
import useCurrentProducts from './custom hooks/useCurrentProducts';
import Button from './components/Button';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const { currentProducts, handleNextProducts, handlePreviousProducts } =
    useCurrentProducts();

  const { data, isError, isLoading, error, isFetching } = useFetchProducts(currentProducts);


  if (isError) return <div>Error: {error?.message}</div>;

  type Product = {
    description: "string",
    id: number,
    price: number,
    thumbnail: string,
    title: string
  }

  return (
    <>
      <Wrapper>
        {data?.products?.map((product: Product) => {
          console.log(product)
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
        <ButtonsContainer isLoading={isLoading} isFetching={isFetching}>
          <Button onClickFunction={handlePreviousProducts} label='Previous' disabled={currentProducts === 0} />
          <Button onClickFunction={handleNextProducts} label='Next' disabled={currentProducts >= 30} />

        </ButtonsContainer>
        <Loader isLoading={isLoading} isFetching={isFetching}/>
      </Wrapper>
    </>
  );
}

export default App;
