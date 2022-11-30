import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";

const loginForm = (validate) => {

    let navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth);
    const message = useSelector(state => state.message);
    const dispatch = useDispatch();
    const[loading, setLoading] = useState(false);
    const[submitting, setSubmitting] = useState(false);

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        });
    }

    const[erros, setErros] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitting(true);
        setErros(validate(values));  
        if(Object.keys(erros).length === 0 && submitting){
            dispatch(login(values.email, values.password)).then(() => {
                console.log(localStorage);
            }).catch((err) => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }

    if(isLoggedIn){
        return navigate('/profile');
    }

        return {handleChange, values, handleSubmit, erros};
}
export default loginForm;