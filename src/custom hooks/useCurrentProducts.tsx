import { useState } from "react";

const useCurrentProducts = () => {
  const [currentProducts, setCurrentProducts] = useState(0);

  const handleNextProducts = () => {
    setCurrentProducts((prev) => prev + 3);
  };

  const handlePreviousProducts = () => {
    setCurrentProducts((prev) => prev - 3);
  };

  return { currentProducts, handleNextProducts, handlePreviousProducts };
};

export default useCurrentProducts;
