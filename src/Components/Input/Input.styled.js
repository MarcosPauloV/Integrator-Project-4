import styled from "styled-components";

export const StyledInput = styled.input`
    display: inline-block;
    width: 90%;
    height: 40px;
    //max-width: 200x;
    max-height: 40px;
    margin: 0.5rem 0;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border: 0.1rem solid #15cdfc;
    padding: 0 1rem;
    &:focus{
        outline: none;
        border-bottom: 0.2rem solid #15cdfc;;
    }
`;
