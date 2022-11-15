import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, disabled = true, onClick, type }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="custom-button border border-white text-white px-5 h-[2.375rem] lg:h-[2.8125rem]"
    >
      {children}
    </button>
  );
};

export default Button;
