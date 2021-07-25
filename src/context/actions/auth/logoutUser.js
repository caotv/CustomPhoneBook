import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT_USER } from "../../../constants/actionTypes";

export default () => (dispatch) => {
    console.log("Logout function!");
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("user");

    dispatch({
        type: LOGOUT_USER
    })
};