import { actionTypes, FetchPersonalitiesSuccess } from "@/types/index";
import { PersonalitiesState } from "@/types/data";

const initialState = {
  personalities: {items: [], nextToken: ''},
};

const onFetchPersonalitiesSuccess = (
  state: PersonalitiesState,
  action: FetchPersonalitiesSuccess,
):PersonalitiesState => {
  const {
    data: {
      listPersonalities:{
        items,
        nextToken
      },
    },
  } = action;
  const formattedItems = items.map(item => ({...item, votes: JSON.parse(item.votes.toString())}))

  return {
    ...state,
    personalities: { items: formattedItems, nextToken}
  };
};

const reducer = (state = initialState, action: FetchPersonalitiesSuccess): PersonalitiesState => {
  switch (action.type) {
    case actionTypes.FETCH_PERSONALITIES_SUCCESS:
      return onFetchPersonalitiesSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
