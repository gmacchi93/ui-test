import Image from "next/image";
import React from "react";

type Props = {
  direction: "up" | "down";
};

const ThumbsIcon = ({ direction }: Props) => {
  return (
    <div className="thumbs-icon relative w-full h-full">
      <Image
        src={`/assets/img/thumbs-${direction}.svg`}
        alt={`thumbs ${direction}`}
        fill
      />
    </div>
  );
};

export default ThumbsIcon;
