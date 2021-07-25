import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import RegisterComponent from '../../components/Register';
import { LOGIN } from '../../constants/routeName';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

const Register = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { navigate } = useNavigation();
    const { authDispatch, authState: { loading, error, data, } } = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (data || error) {
                    clearAuthState(authDispatch);
                }
            }
        }, [data, error])
    );

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "Minimum 6 character" };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: "This field is required" };
            });
        }
    };

    const onSubmit = () => {
        //validation
        if (!form.username) {
            setErrors((prev) => {
                return { ...prev, username: "Please add a user name" };
            });
        }
        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: "Please add a first name" };
            });
        }
        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: "Please add a last name" };
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: "Please add a email" };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "Please add a password" };
            });
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every(item => !item)) {
            register(form)(authDispatch)((response) => {
                navigate(LOGIN, {data: response});
            });
        }
    };


    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    );
}

export default Register;