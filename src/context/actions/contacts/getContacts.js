import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_CONTACTS_FAIL, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosIntance"

export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING
    })
    axiosInstance.get('/contacts/').then((res) => {
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: error.response ? error.response.data : { err: "Something went wrong!" },
        });
    });
};