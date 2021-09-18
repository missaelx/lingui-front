import * as actionTypes from '../../Actions';

const initialState = {
    verbs: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_VERBS:
            return {
                ...state,
                verbs: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
