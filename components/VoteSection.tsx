import { resetVote, vote } from "actions/PersonalityActions";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getStatus from "selectors/StatusSelectors";
import { actionTypes, AppState, Direction, Personality, Votes } from "../types";
import Button from "./Button";
import ThumbsButton from "./ThumbsButton";

type Props = {
  votes: Votes;
  id: string;
};

const VoteSection = ({ id, votes: oldVotes  }: Props) => {
  const dispatch = useDispatch();
  const { isSuccess, isLoading } = useSelector((state:AppState) => getStatus(state, `${actionTypes.VOTE}_${id}`));
  const [direction, setDirection] = useState<Direction | null>(null);
  const handleClick = (option: Direction) => {
    setDirection(option);
  };

  const handleVote = () => {
    if (!isSuccess){
      const votes = {
        ...oldVotes,
        ...(direction === "up" && { positive: oldVotes.positive + 1 }),
        ...(direction === "down" && { negative: oldVotes.negative + 1 }),
      };
      dispatch(vote(id, votes));
    }else{
      setDirection(null);
      dispatch(resetVote(id))
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      {!isSuccess && <div
        className="flex flex-row items-center gap-2"
        role="radiogroup"
        aria-label="What's your sentiment about this personality"
      >
        <ThumbsButton
          direction="up"
          active={direction === "up"}
          onClick={() => {
            handleClick("up");
          }}
        />
        <ThumbsButton
          direction="down"
          active={direction === "down"}
          onClick={() => {
            handleClick("down");
          }}
        />
      </div>}
      <Button disabled={direction === null || isLoading} onClick={handleVote}>
        {isSuccess ? 'Vote again' : 'Vote Now'}
      </Button>
    </div>
  );
};

export default VoteSection;
