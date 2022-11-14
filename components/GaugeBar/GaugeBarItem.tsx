import { Direction } from "@/types/Types";
import React from "react";
import ThumbsIcon from "../ThumbsIcon";

type Props = {
  percentage: number;
  direction: Direction;
};

const GaugeBarItem = ({ percentage, direction }: Props) => {
  return (
    <div
      className="icon-button h-full"
      aria-label={`thumbs ${direction}`}
      style={{ width: `${percentage}%` }}
    >
      <div className="p-2 w-full h-full flex">
        <div className={`flex-1 flex items-center gap-2 ${direction === 'down' ? " flex-row-reverse" : "flex-row"}`}>
          <div className="h-full w-6">
            <ThumbsIcon direction={direction} />
          </div>
          <p className="text-white text-lg lg:text-2xl font-">
            {`${percentage.toFixed(1)} %`}</p>
        </div>
      </div>
    </div>
  );
};

export default GaugeBarItem;
