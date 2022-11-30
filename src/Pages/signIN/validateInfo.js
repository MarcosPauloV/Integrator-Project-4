import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/api";

export default function validateInfo(values){


    let erros = {};

    if(!values.email){
        erros.email = 'Digite o seu e-mail.';
    }

    if(!values.password){
        erros.password = 'Digite a sua senha. ';
    }

    return erros;
}