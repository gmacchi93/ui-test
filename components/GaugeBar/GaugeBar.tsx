import React from "react";
import GaugeBarItemBackground from "./GaugeBarItemBackground";
import GaugeBarItemData from "./GaugeBarItemData";

type Props = {
  name: string;
  votes: {
    positive: number;
    negative: number;
  };
};

const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;

const GaugeBar = ({ votes, name }: Props) => {
  const { positive, negative } = votes;
  const total = negative + positive;
  const positivePercentage = (positive / total) * MAX_PERCENTAGE;
  const negativePercentage = MAX_PERCENTAGE - positivePercentage;

  return (
    <div
      className="gauge-bar relative w-full h-[2.25rem] lg:h-[3.375rem]"
      role="meter"
      aria-valuemin={MIN_PERCENTAGE}
      aria-valuemax={MAX_PERCENTAGE}
      aria-valuenow={parseFloat(positivePercentage.toFixed(1))}
      aria-label={`Positive votes percentage for ${name}`}
    >
      <div className="absolute flex flex-row h-full w-full">
        <GaugeBarItemBackground
          direction="up"
          percentage={positivePercentage}
        />
        <GaugeBarItemBackground
          direction="down"
          percentage={negativePercentage}
        />
      </div>
      <div className="absolute flex flex-row items-center justify-between h-full w-full">
        <GaugeBarItemData percentage={positivePercentage} direction="up" />
        <GaugeBarItemData percentage={negativePercentage} direction="down" />
      </div>
    </div>
  );
};

export default GaugeBar;
