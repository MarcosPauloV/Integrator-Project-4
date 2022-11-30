import React from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Container from "../../Components/shared/Container";
import Title from "../../Components/Title/Title";
import { SignIn, SignInForm } from "../signIN/signInFormLink";

function resetEmail() {
  return (
    <Container className="resetEmail">
      <SignIn>
        <SignInForm>
          <Title text="Redefinir Senha"></Title>
          <Input type="e-mail" placeholder="E-mail"></Input>
          <Button text="Enviar código de verificação"></Button>
        </SignInForm>
        </SignIn>
    </Container>
  );
}

export default resetEmail;
