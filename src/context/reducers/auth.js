import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_AUTH_STATE,
    LOGOUT_USER
} from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                data: payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                data: null
            }
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null
            }
        default:
            return state;

    }
};

export default auth;