import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import verbsReducer from "./verbs/verbsReducer";
import * as actions from "../Actions";

const appReducers = combineReducers({
    verbs: verbsReducer,
});

const rootReducer = (state, action) => {
    if(action.type === actions.LOGOUT){
        state = undefined;
        storage.removeItem('persist:root')
    }

    return appReducers(state, action);
};

export default rootReducer;
