type PriceProps = {
  price: number;
};

const Price = ({ price }: PriceProps) => {
  return (
    <>
      <p className=" font-semibold my-4 text-red-600">{`$${price}`}</p>
    </>
  );
};

export default Price;
