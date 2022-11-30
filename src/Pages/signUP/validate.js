import {cpf} from "cpf-cnpj-validator"
import axios from "axios"
import { useState, useEffect } from "react"


export default function validate(values) {




    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Digite seu nome. ';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if(!values.lastname){
      errors.lastname = 'Digite seu sobrenome. '
    }

    if(!values.cpf || values.cpf.length < 11 || !cpf.isValid(values.cpf)){
      errors.cpf = 'Digite um CPF válido. '
    }

    if(!values.pnumber || values.pnumber.length < 11){
      errors.pnumber = 'Digite um número de telefone válido. '
    }
  
    if (!values.email) {
      errors.email = 'Digite um e-mail. ';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Endereço de e-mail inválido. ';
    }
    if (!values.password) {
      errors.password = 'Informe uma senha';
    } else if (values.password.length < 8) {
      errors.password = 'Precisa ter 8 caracteres ou mais.';
    }
  
    if (!values.password2) {
      errors.password2 = 'Repita sua senha. ';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'As senhas não coincidem. ';
    }
    return errors;
  }