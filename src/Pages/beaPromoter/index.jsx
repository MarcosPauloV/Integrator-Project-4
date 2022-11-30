import React from "react";
import { Container } from "../../Components/Container/styled"
import {
  FormTitle,
  PromoterDiv,
  DivL,
  PromoterFormL,
  PromoLabel,
  SubmitBtn,
  ErrMsg
} from "./styled"

import { useState, useEffect, useRef } from "react";
import {PromoContent} from '../../Components/PromoterContent'
import Input from "../../Components/Input";

import logForm from "./logForm";
import ValidateInfo from "./validateInfo";


const Promoter = () => {
  const{getChange, values, waitChange, erros} = logForm(ValidateInfo);

  const [image, setImage] = useState();
  const inputFileref = useRef();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if(image){
      const reader = new FileReader;
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image])


  return (
    <>
    <PromoContent/>
    <Container >
        
        <PromoterDiv >
          <FormTitle>Crie agora sua conta!</FormTitle>
          <DivL>
            <PromoterFormL onSubmit={waitChange}>

              <PromoLabel>Digite o principal e-mail utilizado</PromoLabel>
              <Input name='eventEmail' type='email' onChange={getChange}></Input>
              {erros.eventEmail && <ErrMsg>{erros.eventEmail}</ErrMsg>}

              <PromoLabel>Qual o nome da instituição responsável?</PromoLabel>
              <Input name='eventName' type='text' onChange={getChange} value={values.eventName}></Input>
              {erros.eventName && <ErrMsg>{erros.eventName}</ErrMsg>}

              <PromoLabel>Qual o CNPJ da empresa responsável pelo evento?</PromoLabel>
              <Input name='eventCnpj' type='text' onChange={getChange}></Input>
              {erros.eventCnpj && <ErrMsg>{erros.eventCnpj}</ErrMsg>}

              <PromoLabel>Crie uma senha para a sua conta</PromoLabel>
              <Input name='eventPassword' type='password' onChange={getChange}></Input>
              {erros.eventPassword && <ErrMsg>{erros.eventPassword}</ErrMsg>}

              <PromoLabel>Informe novamente a senha</PromoLabel>
              <Input name='eventPassword2' type='password' onChange={getChange}></Input>
              {erros.eventPassword2 && <ErrMsg>{erros.eventPassword2}</ErrMsg>}
              <SubmitBtn type='submit'/>
            </PromoterFormL>
            
          </DivL>
          
          
        </PromoterDiv>
    </Container>
    </>
  );
}

export default Promoter;
