import { ContainerDiv, ContainerImg, ContainerP, ContainerWrapper } from './ContainerElements'
import Profile from '../../images/profile-photo.png'


const Container = () => {
    return (
        <ContainerDiv>
            <ContainerWrapper>
               <ContainerImg src={Profile} alt={'Imagem de Perfil'}/>
               <ContainerP>
               <p>Olá! Meu nome é Antonio Bruno de Quevedo Wingert, tenho atualmente 23 anos, estou estudando programação por conta propria, Seja bem vindo ao meu portofólio pessoal!</p>
               <p>Nessa landing page voce pode ter acesso a algumas informações mais especificas sobre mim, assim como acesso a alguns projetos e meu repositorio pessoal do github!</p> 
               <p>Pra entrar em contato comigo voce pode utilizar alguns dos links no rodapé da pagina ou entrar em contato pelo meu email! <strong><a href='/'>antoniobwingert@gmail.com
               </a></strong></p>
               </ContainerP>
            </ContainerWrapper>
        </ContainerDiv>
      
   
)}

  


export default Container;