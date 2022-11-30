import {cpf, cnpj} from "cpf-cnpj-validator";
export default function ValidateInfo(values){ 

    

    let erros = {};

    if (!values.eventEmail) {
        erros.eventEmail = 'Digite um e-mail. ';
      } else if (!/\S+@\S+\.\S+/.test(values.eventEmail)) {
        erros.eventEmail = 'Endereço de e-mail inválido. ';
      }

    if(values.eventName.trim() == ''){
        erros.eventName = "Este campo é obrigatório."
    }

    if (!values.eventCnpj) {
        erros.eventCnpj = 'Informe um CNPJ.';
      } else if (values.eventCnpj.length < 14 || !cnpj.isValid(values.eventCnpj)) {
        erros.eventCnpj = 'CNPJ inválido.';
    }

    if(!values.eventPassword){
        erros.eventPassword = 'Crie uma senha. '
    } else if(values.eventPassword.length < 10){
        erros.eventPassword = 'Crie uma senha com mais de 10 caractéres.'
    }

    if(!values.eventPassword2){
        erros.eventPassword2 = 'Repita a senha. '
    } else if (values.eventPassword2 !== values.eventPassword){
        erros.eventPassword2 = 'As senhas não coincidem. '
    }

    
    return erros;
}