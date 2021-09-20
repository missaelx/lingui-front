import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import * as actions from "../Actions";
import verbsReducer from "./verbs/verbsReducer";
import modalReducer from "./modal/modalReducer";

const appReducers = combineReducers({
    verbs: verbsReducer,
    modal: modalReducer,
});

const rootReducer = (state, action) => {
    if(action.type === actions.LOGOUT){
        state = undefined;
        storage.removeItem('persist:root')
    }

    return appReducers(state, action);
};

export default rootReducer;
