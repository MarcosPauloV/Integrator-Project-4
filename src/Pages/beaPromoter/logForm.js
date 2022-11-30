import { useState, useEffect } from "react";


const logForm = (validateInfo) => {

    const url = "https://diogo1.herokuapp.com/authpartner/register";

    const [values, setValues] = useState({
        eventImage:'',
        eventEmail: '',
        eventName: '',
        eventCnpj: '',
        eventPassword:'',
        eventPassword2: ''
    });
    

    const [erros, setErrs] = useState({});

    //const [submiting, setSubmiting] = useState(false);

    const getChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        });
    }

    const waitChange = e => {
        e.preventDefault();

        

        setErrs(validateInfo(values));
    }

    
    return {getChange, values, waitChange, erros};
}

export default logForm;