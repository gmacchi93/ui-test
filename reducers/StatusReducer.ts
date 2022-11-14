import { statusTypes } from "@/types/status";
import { AnyAction } from "redux";

const StatusReducer = (state = {}, action:AnyAction) => {
  const { type } = action;

  const matchesStart = /(.*)_(REQUEST)/.exec(type);
  const matchesError = /(.*)_(ERROR)/.exec(type);
  const matchesReset = /(.*)_(RESET)/.exec(type);
  const matchesSuccess = /(.*)_(SUCCESS)/.exec(type);

  let status = statusTypes.NOT_STARTED;
  let key = null;

  if (matchesStart) {
    const [, requestName] = matchesStart;
    key = requestName;
    status = statusTypes.LOADING;
  } else if (matchesReset) {
    const [, requestName] = matchesReset;
    key = requestName;
    status = statusTypes.NOT_STARTED;
  } else if (matchesError) {
    const [, requestName] = matchesError;
    key = requestName;
    status = statusTypes.ERROR;
  } else if (matchesSuccess) {
    const [, requestName] = matchesSuccess;
    key = requestName;
    status = statusTypes.SUCCESS;
  }

  if (key) {
    return {
      ...state,
      [key]: status,
    };
  }

  return state;
};

export default StatusReducer;
