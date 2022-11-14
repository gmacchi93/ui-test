import { combineReducers } from 'redux';
import personalities from './PersonalitiesReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
    personalities,
    status,
});

export default rootReducer;