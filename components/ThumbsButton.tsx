import Image from "next/image";
import React from "react";
import ThumbsIcon from "./ThumbsIcon";

type Props = {
  direction: "up" | "down";
  className?: string;
  disabled?: boolean;
};

const ThumbsButton = ({
  direction,
  className = "",
  disabled = false,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={`icon-button p-2 w-[1.875rem] h-[1.875rem] lg:w-[2.8125rem] lg:h-[2.8125rem]`}
      aria-label={`thumbs ${direction}`}
    >
      <ThumbsIcon direction={direction} />
    </button>
  );
};

export default ThumbsButton;
