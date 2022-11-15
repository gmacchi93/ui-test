import { actionTypes, FetchPersonalitiesSuccess, Personality } from "@/types/index";
import { PersonalitiesState } from "@/types/data";
import { AnyAction } from "redux";

const initialState = {
  personalities: { items: [], nextToken: "" },
};

const onFetchPersonalitiesSuccess = (
  state: PersonalitiesState,
  action: AnyAction
): PersonalitiesState => {
  const {
    data: {
      listPersonalities: { items, nextToken },
    },
  } = action;
  const formattedItems = items.map((item:Personality) => ({
    ...item,
    votes: JSON.parse(item.votes.toString()),
  }));

  return {
    ...state,
    personalities: { items: formattedItems, nextToken },
  };
};

const onVoteSuccess = (
  state: PersonalitiesState,
  action: AnyAction
): PersonalitiesState => {
  const { data } = action;
  const formattedItem = {
    ...data,
    votes: JSON.parse(data.votes.toString()),
  };
  const items = state.personalities.items.map((item) =>
    item.id === formattedItem.id ? formattedItem : item
  );

  return {
    ...state,
    personalities: {
      ...state.personalities,
      items,
    },
  };
};

const reducer = (
  state = initialState,
  action: AnyAction
): PersonalitiesState => {
  const matchesSuccess = /VOTE_SUCCESS_*/.exec(action.type);

  if (matchesSuccess) {
    return onVoteSuccess(state, action);
  }

  switch (action.type) {
    case actionTypes.FETCH_PERSONALITIES_SUCCESS:
      return onFetchPersonalitiesSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
