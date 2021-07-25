import React, { useState, useContext, useEffect } from 'react';
import LoginComponent from '../../components/Login';
import { GlobalContext } from '../../context/Provider';
import login from '../../context/actions/auth/login';
import { useRoute } from '@react-navigation/native';

const Login = () => {
    const { params } = useRoute();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [justSignUp, setJustSignUp] = useState(false);
    const { authDispatch, authState: { loading, error, isLoggedIn, } } = useContext(GlobalContext);

    useEffect(() => {
        if (params?.data) {
            console.log("Params", params);
            setJustSignUp(true);
            setForm({ ...form, username: params.data.username });
        }
    }, [params])

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
        setJustSignUp(false);
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
            form={form}
            loading={loading}
            justSignUp={justSignUp}
        />
    );
}

export default Login;