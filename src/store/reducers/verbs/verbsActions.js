
import {axiosInstance} from "../../../hoc/axios";
import * as actions from "../../Actions";

export const getVerbs = () => {
    return async (dispatch) => {
        try{
            console.log("entre")
            let response = await axiosInstance.get("/verbs")
            dispatch({ type: actions.GET_VERBS, payload: response.data })
        } catch(error) {
            console.error(error)
        }
    }
}