import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconsLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">Antonio Bruno Wingert</SocialLogo>
                    <SocialIcons>
                        <SocialIconsLink href="https://twitter.com/AntonioBWingert" target="_blank" arial-label="Twitter" rel="noopener noreferrer"><FaTwitter /></SocialIconsLink>
                        <SocialIconsLink href="https://www.instagram.com/antoniobwingert/" target="_blank" arial-label="Instagram" rel="noopener noreferrer"><FaInstagram /></SocialIconsLink>
                        <SocialIconsLink href="https://www.linkedin.com/in/antonio-bruno-wingert-87369922a/" target="_blank" arial-label="Linkedin" rel="noopener noreferrer"><FaLinkedin /></SocialIconsLink>
                        <SocialIconsLink href="https://github.com/AntonioWingert" target="_blank" arial-label="GitHub" rel="noopener noreferrer"><FaGithub /></SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer