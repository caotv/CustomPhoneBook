import AsyncStorage from "@react-native-async-storage/async-storage";
import { CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS, } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosIntance"

export default (form) => (dispatch) => (onSuccess) => {
    const payload = {
        "country_code": form.countryCode || '',
        "first_name": form.firstName || '',
        "last_name": form.lastName || '',
        "phone_number": form.phoneNumber || '',
        "contact_picture": form.contactPicture || '',
        "is_favorite": form.isFavorite || false,
    };
    console.log(payload);

    dispatch({
        type: CREATE_CONTACT_LOADING
    });

    // console.log("Payload", payload);

    axiosInstance
        .post('/contacts/', payload)
        .then((res) => {
            dispatch({
                type: CREATE_CONTACT_SUCCESS,
                payload: res.data,
            });
            onSuccess();

        }).catch((error) => {
            console.log('request errror', error.response);
            dispatch({
                type: CREATE_CONTACT_FAIL,
                payload: error.response ? error.response.data : { err: "Something went wrong!" },
            });
        });
};