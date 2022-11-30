import React, {useState} from 'react'
import {FormS, SubTitle, ValidationCode, Code} from './styled'

const FormSuccess = (props) => {

  return (
    <FormS>
        Enviamos um e-mail de verificação para: {props.email}
        <ValidationCode>
          Insira o código: 
            
        </ValidationCode>
        <SubTitle>
            Lembre-se de checar a caixa de Spam.
        </SubTitle>
    </FormS>
  )
}

export default FormSuccess