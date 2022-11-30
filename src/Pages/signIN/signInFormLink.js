import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignIn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%,-50%);
  width: 50vh;
  height: 50%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  border: none;
  color: #000;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const SignInForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FormLink = styled.p`
  margin-top: 1rem;
  color: #000;;
  font-weight: bold;
`;

export const FormLinkReset = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #15cdfc;
  }
`;
