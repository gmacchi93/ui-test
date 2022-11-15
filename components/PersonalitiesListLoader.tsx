import React from "react";
import ItemCardLoader from "./ItemCardLoader";

type Props = {};

const PersonalitiesListLoader = (props: Props) => {
  return (
    <div className="flex flex-row sm:flex-col overflow-x-auto gap-4 pb-4">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return <ItemCardLoader key={index} />;
        })}
    </div>
  );
};

export default PersonalitiesListLoader;
