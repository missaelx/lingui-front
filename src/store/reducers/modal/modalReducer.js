import * as actionTypes from '../../Actions';

const initialState = {
    active: false,
    title: "",
    type: "",
    additionalData: null,
    buttons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                ...action.payload,
                active: true
            };
        case actionTypes.HIDE_MODAL:
            return {
                active: false,
                title: "",
                type: "",
                additionalData: null,
                buttons: []
            };
        default:
            return state;
    }
};

export default reducer;
