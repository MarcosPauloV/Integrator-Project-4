import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const logForm = (validateInfo) => {

    const navigate = useNavigate();

    const[values, setValues] = useState({
        evFile: '',
        evName : '',
        evState: '',
        evLocal: '',
        evDate: '',
        evYear: '',
        evType: '',
        evOverview: ''
    });

    const [erros, setErros] = useState({});

    const handleChange = e => {
        const{name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("https://diogo1.herokuapp.com/api/event/create", {
            evFile: values.evFile,
            evName: values.evName,
            evState: values.evState,
            evLocal: values.evLocal,
            evDate : values.evDate,
            evYear: values.evYear,
            evType: values.evType,
            evOverview: values.evOverview 
        }).then((response) => {
            console.log(response);
           

        }).catch((error) => {
            console.log(error);
        })
        
        setErros(validateInfo(values));

        console.log(values);
    }

    return {handleChange, values, handleSubmit, erros};

}

export default logForm;