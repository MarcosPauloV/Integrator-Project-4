import React, {useState} from "react";
import { MainDiv, LeftDiv, StyledForm, LeftDivTitle} from "../../Components/Form/Form.styled";
import Input from "../../Components/Input";
import Container from "../../Components/shared/Container";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import { FormLink, FormP, ErrP } from "./formLink";
import logForm from "./logForm";
import validate from "./validate";
import FormSuccess from "../../Components/FormSuccess";


export default function signUP() {


  const{getChange, values, waitChange, errors} = logForm(submitForm , validate);

  const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    const email = values.email;

  return (
    <Container className="signUP">
      {!isSubmitted ? <MainDiv>
        <LeftDiv>
          
            <LeftDivTitle>Crie sua conta e descubra todas as ferramentas do nosso site!</LeftDivTitle>
          
        </LeftDiv>
        
        <StyledForm method="get" submitForm = {submitForm} onSubmit={waitChange}>
              <Title text="Crie sua conta"></Title>
              <Input value={values.username} onChange={getChange}   name='username' type="text" placeholder="Nome" />
              {errors.username && <ErrP>{errors.username}</ErrP>}
              <Input value={values.lastname} onChange={getChange}   name='lastname' type='text' placeholder="Sobrenome" />
              {errors.lastname && <ErrP>{errors.lastname}</ErrP>}
              <Input value={values.cpf} onChange={getChange}        name='cpf' type="text" placeholder="CPF" />
              {errors.cpf && <ErrP>{errors.cpf}</ErrP>}
              <Input value={values.pnumber} onChange={getChange}    name='pnumber' type="tel" placeholder="Telefone" />
              {errors.pnumber && <ErrP>{errors.pnumber}</ErrP>}
              <Input value={values.email} onChange={getChange}      name='email' type="email" placeholder="E-mail" />
              {errors.email && <ErrP>{errors.email}</ErrP>}
              <Input value={values.password} onChange={getChange}   name='password' type="password" placeholder="Senha" />
              {errors.password && <ErrP>{errors.password}</ErrP>}
              <Input value={values.password2} onChange={getChange}  name='password2' type="password" placeholder="Confirme sua senha senha" />
              {errors.password2 && <ErrP>{errors.password2}</ErrP>}
              <Button text="Cadastrar"></Button>
              <FormP>
                Já possui uma conta? <FormLink to="../signIN">Entre aqui.</FormLink>
              </FormP>
          </StyledForm> 
          
      </MainDiv> : 
      <FormSuccess
      email={email}
      >

      </FormSuccess>
      }
    </Container>
  );
}
