import { statusTypes } from "@/types/status";
import { actionTypes, AppState } from "../types";

const getStatus = (state: AppState, action: actionTypes) => {
  const status = state.status[`${action}`];
  const isSuccess = status === statusTypes.SUCCESS;
  const isError = status === statusTypes.ERROR;
  const isLoading = status === statusTypes.LOADING;
  return {
    status,
    isLoading,
    isSuccess,
    isError,
  };
};

export default getStatus;
