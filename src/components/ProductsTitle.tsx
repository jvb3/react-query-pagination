type ProductsTitleProps = {
  title: string;
};

const ProductsTitle = ({ title }: ProductsTitleProps) => {
  return (
    <>
      <p className=" text-2xl font-bold  my-4">{title}</p>
    </>
  );
};

export default ProductsTitle;
