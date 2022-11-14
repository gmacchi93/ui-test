import { Direction } from "@/types/index";
import React from "react";
import ThumbsIcon from "../ThumbsIcon";

type Props = {
  percentage: number;
  direction: Direction;
};

const GaugeBarItemBackground = ({ percentage, direction }: Props) => {
  return (
    <div
      className={`${direction === "up" ? "bg-thumbs-up" : "bg-thumbs-down" } bg-opacity-80 h-full`}
      style={{ width: `${percentage}%` }}
    ></div>
  );
};

export default GaugeBarItemBackground;
