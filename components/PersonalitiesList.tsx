import { fetchPersonalities } from "actions/PersonalityActions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPersonalities } from "selectors/PersonalitySelectors";
import getStatus from "selectors/StatusSelectors";
import { actionTypes, AppState, Option } from "../types";
import Dropdown from "./Dropdown/Dropdown";
import ItemCard from "./ItemCard";
import ItemCardLoader from "./ItemCardLoader";
import PersonalitiesListLoader from "./PersonalitiesListLoader";

type Props = {};

const PersonalitiesList = (props: Props) => {
  const dispatch = useDispatch();
  const options = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
  ];
  const { items: personalities } = useSelector((state: AppState) =>
    getPersonalities(state)
  );
  const { isLoading, isSuccess } = useSelector((state: AppState) =>
    getStatus(state, actionTypes.FETCH_PERSONALITIES)
  );

  const [listView, setlistView] = useState("list");

  useEffect(() => {
    dispatch(fetchPersonalities());
  }, [dispatch]);

  return (
    <section>
      <div className="flex flex-row">
        <h2 className="flex-1 text-2xl font-light">Previous Rulings</h2>
        <div className="hidden sm:block">
          <Dropdown
            id="dropdown-list-view"
            options={options}
            selected={listView}
            onSelect={(option: Option) => {
              setlistView(option.value);
            }}
          />
        </div>
      </div>
      <div
        className={`${
          listView === "grid" ? "personalities-grid" : "personalities-list"
        }`}
      >
        {isSuccess && <div className="flex flex-row sm:flex-col overflow-x-auto gap-4 pb-4">
          {personalities.map((personality) => (
            <ItemCard key={personality.id} personality={personality} />
          ))}
        </div>}
        {isLoading && <PersonalitiesListLoader />} 
      </div>
    </section>
  );
};

export default PersonalitiesList;
