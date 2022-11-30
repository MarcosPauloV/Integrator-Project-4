import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const logForm = (callback, validate) => {
        
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        lastname: '',
        cpf: '',
        pnumber: '',
        email: '',
        password: '',
        password2:''
    });
    
    const [response, setResponse] = useState();
    const [errors, setErrs] = useState({});
    const [submiting, setSubmiting] = useState(false);


    const getChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        });
    }

    const waitChange = (e) => {
        e.preventDefault();

        axios.post("https://diogo1.herokuapp.com/api/auth/register", {
            username: values.username,
            lastname : values.lastname,
            cpf: values.cpf,
            pnumber: values.pnumber,
            email : values.email,
            password: values.password,
            password2: values.password2
            
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        setErrs(validate(values));
        setSubmiting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submiting){
            callback();
        }
    }, [errors])
    return {getChange, values, waitChange, errors};
}

export default logForm;