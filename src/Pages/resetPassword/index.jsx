import React from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Container from "../../Components/shared/Container";
import Title from "../../Components/Title/Title";
import { StyledForm } from "../../Components/Form/Form.styled";

function resetPassword() {
  return (
    <Container className="resetPassword">
      <StyledForm>
        <Title text="Redefinir Senha"></Title>
        <Input type="password" placeholder="Nova Senha"></Input>
        <Input type="password" placeholder="Confirmar Nova Senha"></Input>
        <Button text="Redefinir Senha"></Button>
      </StyledForm>
    </Container>
  );
}

export default resetPassword;
