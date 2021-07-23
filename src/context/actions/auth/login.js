import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosIntercepter"

export default ({
    username,
    password,
}) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING
    })
    axiosInstance.post('/auth/login', {
        username,
        password,
    }).then((res) => {
        AsyncStorage.setItem("token", res.data.token);
        AsyncStorage.setItem("user", JSON.stringify(res.data));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    }).catch((error) => {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response ? error.response.data : { err: "Something went wrong!" },
        });
    });
};