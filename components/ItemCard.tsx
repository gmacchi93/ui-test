/* eslint-disable @next/next/no-img-element */
import { Personality } from "@/types/Types";
import React from "react";
import GaugeBar from "./GaugeBar/GaugeBar";
import ThumbsButton from "./ThumbsButton";
import VoteSection from "./VoteSection";

type Props = {
  personality: Personality;
};

const ItemCard = ({ personality }: Props) => {
  return (
    <div
      className="w-[18.75rem] h-[18.75rem] sm:w-full sm:h-[8.875rem] lg:h-[10.625rem] overflow-hidden relative"
    >
      <div className="absolute left-0 sm:-left-[1.6875rem]">
        <img
          alt={`Photo of ${personality.name}`}
          src="/assets/img/pope-francis.png"
          className="object-cover w-[18.75rem] h-[18.75rem] sm:w-[13.5118rem] lg:w-64 sm:h-[8.875rem] lg:h-[10.625rem]"
        />
      </div>
      <div
        className="hidden sm:block test absolute right-0 h-[8.875rem] lg:h-[10.625rem] sm:-left-3 lg:left-10"
      ></div>
      <div className="absolute inset-0">
        <div className="absolute top-[5.9375rem] sm:top-0">
          <ThumbsButton direction="down" disabled />
        </div>
        <div
          className="w-full flex flex-col justify-end px-8 sm:flex-row gap-2 sm:gap-8 sm:px-2 py-1 h-[16.5rem] sm:h-[6.625rem] lg:h-[7.25rem] sm:pl-[8.5118rem] lg:pl-64"
        >
          <div className="flex flex-col gap-2 sm:gap-0 justify-between lg:justify-start md:py-0 text-white">
            <h1 className="text-white text-4xl line-clamp-1">{personality.name}</h1>
            <p className="text-white line-clamp-2">{personality.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <p className="text-right font-bold text-white">
              <small className="drop-shadow-md sm:shadow-none">{`1 month ago in ${personality.category}`}</small>
            </p>
            <VoteSection />
          </div>
        </div>
        <GaugeBar votes={personality.votes}/>
      </div>
    </div>
  );
};

export default ItemCard;
