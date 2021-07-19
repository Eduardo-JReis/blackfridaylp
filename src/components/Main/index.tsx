import { Container, Content } from "./styles";
import { Form } from "../Form";
import { Footer } from "../Footer";

import image from "../../assets/bg-black.png";
import logo from "../../assets/logo.svg";

export const Main = () => {

    

    return (
        <Container>
            <img src={logo} height="30" alt="logo" />
            <Content>
                <img src={image} height="600" alt="bg"></img>
                <Form />
            </Content>
            
            <Footer />
        </Container>
    );
}