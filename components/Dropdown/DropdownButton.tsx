import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const DropdownButton = ({ children, onClick }: Props) => {
  return (
    <button className="px-5 py-2 border-2 border-black bg-white text-black w-[10.8125rem]" onClick={onClick}>
      {children}
    </button>
  );
};

export default DropdownButton;
