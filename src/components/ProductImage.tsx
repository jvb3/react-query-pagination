type ProductImageProps = {
  imageSrc: string;
};

const ProductImage = ({ imageSrc }: ProductImageProps) => {
  return (
    <div className="w-[200px] h-[150px] overflow-hidden">
      <img className=" w-full h-full object-cover " src={imageSrc} />
    </div>
  );
};

export default ProductImage;
