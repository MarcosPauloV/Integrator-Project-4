import { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

export const authProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(()=> {
        
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("user_db");

        //Verifica se tem um token e se é um usuário
        if(userToken && usersStorage){
            //Verifica se um usuário tem o mesmo email do token 
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email == JSON.parse(userToken).email
            );
            //Seta o usuário
            if(hasUser) setUser(hasUser[0]);
        }
        
    },[]);

    //Função de acesso ao sistema de login
    const  signin = ( email, password )=> {
        
        //Pegando o Usuário do Banco De Dado (user_db)
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))
        
        //Filtra para ver se esse usuário existe
        const hasUser = usersStorage?.filter((user)=> user.email === email);

        //Percorre o array
        if(hasUser?.length){
            
            //Verificando que ele existe
            if(hasUser[0].email === email && hasUser[0].password === password){
                //Gerando um token aleatório
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token}));
                setUser({ email, password });
            }else{
                return "Email ou senha incorretos";
            }
        }else{
            return "Usuário não cadastrado";
        }
            
    }

    return <authContext.Provider>{children}</authContext.Provider>
}