import { useState } from "react";
import { FormContent } from "./styles";


export const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const changeName = event => {
        
        setName(event.target.value);
    }
    
    const changeMail = event => {
     
        setEmail(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('nameInLocalStorage', name);
        
        localStorage.setItem('emailInLocalStorage', email);
    }

    return (
        <FormContent onSubmit={handleSubmit}>
            <h2>Cadastre-se para receber novidades e promoções da Black Friday 2021</h2>
            <input type="text" name="name" value={name} onChange={changeName} placeholder="Digite seu nome"/>
            <input type="email" name="email" value={email} onChange={changeMail} placeholder="Digite seu email"/>
            <button type="submit">CADASTRAR</button>
        </FormContent>
    );
}