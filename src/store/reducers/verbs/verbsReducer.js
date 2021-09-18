import * as actionTypes from '../../Actions';

const initialState = {
    verbs: [],
    practicePreterite: false,
    practicePastParticiple: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_VERBS:
            return {
                ...state,
                verbs: action.payload
            };
        case actionTypes.SET_PRACTICE_PRETERITE:
            return {
                ...state,
                practicePreterite: action.payload
            };
        case actionTypes.SET_PRACTICE_PAST_PARTICIPLE:
            return {
                ...state,
                practicePastParticiple: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
