import React from "react";
import ThumbsIcon from "../ThumbsIcon";
import GaugeBarItem from "./GaugeBarItem";

type Props = {
  votes: {
    positive: number;
    negative: number;
  };
};

const GaugeBar = ({ votes }: Props) => {
  const { positive, negative } = votes;
  const total = negative + positive;
  const positivePercentage = (positive / total) * 100;
  const negativePercentage = 100 - positivePercentage;
  const isPositive = positivePercentage >= negativePercentage;
  return (
    <div className="w-full flex flex-row h-[2.25rem] lg:h-[3.375rem]">
      <GaugeBarItem percentage={positivePercentage} direction="up" />
      <GaugeBarItem percentage={negativePercentage} direction="down" />
    </div>
  );
};

export default GaugeBar;
