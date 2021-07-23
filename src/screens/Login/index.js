import React, { useState, useContext } from 'react';
import LoginComponent from '../../components/Login';
import { GlobalContext } from '../../context/Provider';
import login from '../../context/actions/auth/login';

const Login = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { authDispatch, authState: { loading, error, isLoggedIn, } } = useContext(GlobalContext);

    const onSubmit = () => {
        //validation
        if (!form.username) {
            setErrors((prev) => {
                return { ...prev, username: "Please add a user name" };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "Please add a password" };
            });
        }

        if (form.username && form.password) {
            login(form)(authDispatch);
        }

    }

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
        if (value !== '') {
            setErrors((prev) => {
                return { ...prev, [name]: null };
            });
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: "This field is required!" };
            });
        }
    };
    return (
        <LoginComponent
            onChange={onChange}
            onSubmit={onSubmit}
            errors={errors}
            error={error}
            loading={loading}
        />
    );
}

export default Login;