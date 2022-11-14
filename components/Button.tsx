import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className="bg-neutral-800 border border-white text-white px-5 h-[2.375rem] lg:h-[2.8125rem]"
    >
      {children}
    </button>
  );
};

export default Button;
