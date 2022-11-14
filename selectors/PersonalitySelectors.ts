import { AppState, PersonalityState } from "../types";

export const getPersonalities = (state:AppState):PersonalityState => state.personalities.personalities;
