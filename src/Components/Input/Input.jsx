import React from "react";
import { StyledInput } from "./Input.styled";


const Input = ({value, onChange, name, id, type, placeholder }) => {
    return (
            <StyledInput value={value} onChange={onChange} name={name}  id={id} type= {type} placeholder = {placeholder} />
    );
};


export default Input;