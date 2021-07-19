import styled from "styled-components";

export const FooterContent = styled.footer`

    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 6rem;

    p {
        color: var(--gray);
        font-size: 12px;
    }

    #contact {
        display: flex;
        justify-content: center;
        align-items: center;
    
    }

    .icons{
        margin-left: 5  px;

        & a{
            margin-left: 10px;
        }
    }

    
    

    
`;