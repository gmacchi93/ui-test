import React from "react";
import VoteSection from "@/components/VoteSection";
import { Personality } from "@/types/models";
import { useSelector } from "react-redux";
import { AppState } from "@/types/data";
import getStatus from "selectors/StatusSelectors";
import { actionTypes } from "@/types/actions";

type Props = {
  personality: Personality;
};

const ItemCardFooter = ({ personality }: Props) => {
  const { id, votes, category } = personality;
  const { isSuccess } = useSelector((state: AppState) =>
    getStatus(state, `${actionTypes.VOTE}_${id}`)
  );
  
  return (
    <footer className="flex flex-col items-end gap-2 flex-shrink-0">
      <p className="text-right font-bold text-white">
        <small className="drop-shadow-md sm:shadow-none">
          {isSuccess ? "Thanks for your voting!" : `1 month ago in ${category}`}
        </small>
      </p>
      <VoteSection votes={votes} id={id} />
    </footer>
  );
};

export default ItemCardFooter;
