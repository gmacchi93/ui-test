import React from "react";
import ThumbsIcon from "@/components/ThumbsIcon";
import { Votes } from "@/types/models";

type Props = {
  votes: Votes;
};

const ItemCardStatus = ({ votes }: Props) => {
  const isPositive = votes.positive >= votes.negative;
  return (
    <div className="item-card-status absolute top-[calc(30%)] sm:top-0">
      <div
        className={`thumbs-icon-container p-2 w-[1.875rem] h-[1.875rem] lg:w-[2.8125rem] lg:h-[2.8125rem] ${
          isPositive ? "bg-thumbs-up" : "bg-thumbs-down"
        }`}
      >
        <ThumbsIcon direction={isPositive ? "up" : "down"} />
      </div>
    </div>
  );
};

export default ItemCardStatus;
