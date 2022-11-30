import React, {useEffect, useState} from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Container from "../../Components/shared/Container";
import Title from "../../Components/Title/Title";
import { FormLinkReset, FormLink, SignIn, SignInForm } from "./signInFormLink";
import loginForm from "./loginForm";
import validateInfo from "./validateInfo";
import { ErrP } from "../signUP/formLink";
import api from "../../api/api";

function signIN() {

  const{handleChange, values, handleSubmit, erros} = loginForm(validateInfo);

  const [info, setInfo] = useState({});
  

  return (
    <Container className="signIN">
      <SignIn>
        
          <SignInForm onSubmit={handleSubmit} method="get">
            <Title text="Entrar"></Title>
            <Input name='email' type="e-mail" placeholder="E-mail" onChange={handleChange} />
            {erros.email && <ErrP>{erros.email}</ErrP>}

            <Input name='password' type="password" placeholder="Senha" onChange={handleChange}/>
            {erros.password && <ErrP>{erros.password}</ErrP>}
            <Button text="Entrar"></Button>
            <FormLink>
              Esqueceu sua senha?
              <FormLinkReset to="../resetEmail"> Redefina aqui</FormLinkReset>
            </FormLink>
          </SignInForm>
      </SignIn>
    </Container>
  );
}

export default signIN;
