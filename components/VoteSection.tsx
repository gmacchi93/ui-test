import React from "react";
import Button from "./Button";
import ThumbsButton from "./ThumbsButton";

type Props = {};

const VoteSection = (props: Props) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <ThumbsButton direction="up" />
      <ThumbsButton direction="down" />
      <Button>Vote now</Button>
    </div>
  );
};

export default VoteSection;
