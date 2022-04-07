import React from "react";
import { FormButton, FormForm, FormInput, FormWrapper, FormMessage, SocialIconsLink, SocialIcons } from "./FormElements";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';


export function Form() {
    return (
        <>
            <FormWrapper>
                <h2>Entre em contato comigo!</h2>
                <SocialIcons>
                    <SocialIconsLink href="https://twitter.com/AntonioBWingert" target="_blank" arial-label="Twitter" rel="noopener noreferrer"><FaTwitter /><h3>@AntonioBWingert</h3></SocialIconsLink>
                    <SocialIconsLink href="https://www.instagram.com/antoniobwingert/" target="_blank" arial-label="Instagram" rel="noopener noreferrer"><FaInstagram /><h3>@AntonioBWingert</h3></SocialIconsLink>
                    <SocialIconsLink href="https://www.linkedin.com/in/antonio-bruno-wingert-87369922a/" target="_blank" arial-label="Linkedin" rel="noopener noreferrer"><FaLinkedin /><h3>AntonioBrunoWingert</h3></SocialIconsLink>
                    <SocialIconsLink href="https://github.com/AntonioWingert" target="_blank" arial-label="GitHub" rel="noopener noreferrer"><FaGithub /><h3>AntonioBrunoWingert</h3></SocialIconsLink>
                </SocialIcons>
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