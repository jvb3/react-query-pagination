import { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Wrapper;
