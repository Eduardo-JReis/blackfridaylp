import { FooterContent } from "./styles";
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
    return (
        <FooterContent>
            <p>Desafio - Hiring Coders 2021</p>
            <div id="contact">
                <p>Desenvolvido por Eduardo Reis</p>
                <div className="icons">
                    <a href="https://github.com/Eduardo-JReis" target="_blank" ><FaGithub color="#969cb3" /></a>
                    
                    <a href="https://www.linkedin.com/in/eduardo-reis-73a16512b/" target="_blank"><FaLinkedin color="#969cb3"/></a>
                </div>
            </div>
        </FooterContent>
    );
}

