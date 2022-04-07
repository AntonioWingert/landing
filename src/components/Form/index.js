import React from "react";
import { FormButton, FormForm, FormInput, FormWrapper, FormMessage } from "./FormElements";

export function Form() {
    return (
        <>
            <FormWrapper>
                <FormForm>
                    <h2>Entre em Contato:</h2>
                    <label htmlFor="name"></label>
                    <FormInput type="text" name="name" placeholder="Digite seu nome:"/>
                    <label htmlFor="email"></label>
                    <FormInput type="email" name="email" placeholder="Digite seu Email:" />
                    <label htmlFor="message"></label>
                    <FormMessage type="text" name="message" placeholder="Digite sua Mensagem:" />
                    <FormButton type="submit">Envie uma Mensagem!</FormButton>
                </FormForm>
            </FormWrapper>
        </>
    )
          

}