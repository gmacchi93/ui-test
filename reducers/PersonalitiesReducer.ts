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
      listPersonalities,
    },
  } = action;
  return {
    ...state,
    personalities: { ...listPersonalities}
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
