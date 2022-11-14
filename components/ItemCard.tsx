/* eslint-disable @next/next/no-img-element */
import { Personality } from "@/types/index";
import React from "react";
import GaugeBar from "./GaugeBar/GaugeBar";
import ThumbsButton from "./ThumbsButton";
import ThumbsIcon from "./ThumbsIcon";
import VoteSection from "./VoteSection";

type Props = {
  personality: Personality;
};

const ItemCard = ({ personality }: Props) => {
  const { name, picture, description, category, votes } = personality;
  const isPositive = votes.positive >= votes.negative;

  return (
    <article className="item-card flex-shrink-0 w-[18.75rem] h-[18.75rem] sm:w-full sm:h-[8.875rem] lg:h-[10.625rem] overflow-hidden relative">
      <div className="item-photo absolute left-0 sm:-left-[1.6875rem] lg:left-0">
        <img
          alt={`Photo of ${name}`}
          src={`/assets/img/personalities/${picture}`}
          className="object-cover w-[18.75rem] h-[18.75rem] sm:w-[13.5118rem] lg:w-64 sm:h-[8.875rem] lg:h-[10.625rem]"
        />
      </div>
      <div className="item-card-gradient hidden sm:block item-card__background-gradient absolute right-0 h-[8.875rem] lg:h-[10.625rem] sm:left-0 lg:left-10"></div>
      <div className="item-cart-content-container absolute inset-0 flex flex-col">
        <div className="item-card-status absolute top-[calc(30%)] sm:top-0">
          <div className={`thumbs-icon-container p-2 w-[1.875rem] h-[1.875rem] lg:w-[2.8125rem] lg:h-[2.8125rem] ${isPositive ? "bg-thumbs-up" : "bg-thumbs-down"}`}>
            <ThumbsIcon direction={isPositive ? "up" : "down"} />
          </div>
        </div>
        <div className="item-card-info flex-1 w-full flex flex-col justify-end px-8 sm:flex-row gap-2 sm:gap-8 sm:px-2 py-1 h-[16.5rem] sm:h-[6.625rem] lg:h-[7.25rem] sm:pl-[8.5118rem] lg:pl-[14rem]">
          <div className="flex flex-col gap-2 sm:gap-0 justify-between lg:justify-start md:py-0 text-white">
            <h3 className="text-white text-3xl sm:text-2xl lg:text-4xl line-clamp-2">{name}</h3>
            <p className="text-white line-clamp-2">{description}</p>
          </div>
          <footer className="flex flex-col items-end gap-2 flex-shrink-0">
            <p className="text-right font-bold text-white">
              <small className="drop-shadow-md sm:shadow-none">{`1 month ago in ${category}`}</small>
            </p>
            <VoteSection />
          </footer>
        </div>
        <GaugeBar votes={votes} name={name} />
      </div>
    </article>
  );
};

export default ItemCard;
