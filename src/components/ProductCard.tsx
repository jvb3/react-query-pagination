import { PropsWithChildren } from 'react';

const ProductCard = ({ children }: PropsWithChildren) => {
  return (
    <article className=" w-[500px] m-4 bg-slate-300 p-4 rounded-sm">
      {children}
    </article>
  );
};

export default ProductCard;
