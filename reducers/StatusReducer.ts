import { statusTypes } from "@/types/status";
import { AnyAction } from "redux";

const StatusReducer = (state = {}, action:AnyAction) => {
  const { type } = action;

  const matchesStart = /(.*)_REQUEST(.*)/.exec(type);
  const matchesError = /(.*)_ERROR(.*)/.exec(type);
  const matchesReset = /(.*)_RESET(.*)/.exec(type);
  const matchesSuccess = /(.*)_SUCCESS(.*)/.exec(type);

  let status = statusTypes.NOT_STARTED;
  let key = null;

  if (matchesStart) {
    const [, requestName, id] = matchesStart;
    key = id ? `${requestName}${id}` : requestName;
    status = statusTypes.LOADING;
  } else if (matchesReset) {
    const [, requestName, id] = matchesReset;
    key = id ? `${requestName}${id}` : requestName;
    status = statusTypes.NOT_STARTED;
  } else if (matchesError) {
    const [, requestName, id] = matchesError;
    key = id ? `${requestName}${id}` : requestName;
    status = statusTypes.ERROR;
  } else if (matchesSuccess) {
    const [, requestName, id] = matchesSuccess;
    key = id ? `${requestName}${id}` : requestName;
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
