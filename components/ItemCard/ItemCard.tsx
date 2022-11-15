/* eslint-disable @next/next/no-img-element */
import { actionTypes, AppState, Personality } from "@/types/index";
import React from "react";
import { useSelector } from "react-redux";
import getStatus from "selectors/StatusSelectors";
import GaugeBar from "@/components/GaugeBar";
import VoteSection from "@/components/VoteSection";
import ItemCardPhoto from "./ItemCardPhoto";
import ItemCardStatus from "./ItemCardStatus";
import ItemCardFooter from "./ItemCardFooter";

type Props = {
  personality: Personality;
};

const ItemCard = ({ personality }: Props) => {
  const { id, name, picture, description, category, votes } = personality;
  const { isSuccess } = useSelector((state: AppState) =>
    getStatus(state, `${actionTypes.VOTE}_${id}`)
  );

  return (
    <article className="item-card flex-shrink-0 w-[18.75rem] h-[18.75rem] sm:w-full sm:h-[8.875rem] lg:h-[10.625rem] overflow-hidden relative">
      <ItemCardPhoto name={name} picture={picture} />
      <div className="item-card-gradient hidden sm:block item-card__background-gradient absolute right-0 h-[8.875rem] lg:h-[10.625rem] sm:left-0 lg:left-10"></div>
      <div className="item-cart-content-container absolute inset-0 flex flex-col">
        <ItemCardStatus votes={votes} />
        <div className="item-card-info flex-1 w-full flex flex-col justify-end px-8 sm:flex-row gap-2 sm:gap-8 sm:px-2 py-1 h-[16.5rem] sm:h-[6.625rem] lg:h-[7.25rem] sm:pl-[8.5118rem] lg:pl-[14rem]">
          <div className="flex flex-col gap-2 sm:gap-0 justify-between lg:justify-start md:py-0 text-white">
            <h3 className="text-white text-3xl sm:text-2xl lg:text-4xl line-clamp-2">
              {name}
            </h3>
            <p className="text-white line-clamp-2">{description}</p>
          </div>
          <ItemCardFooter personality={personality} />
        </div>
        <GaugeBar votes={votes} name={name} />
      </div>
    </article>
  );
};

export default ItemCard;
