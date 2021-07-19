import styled from "styled-components";

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;

    h2 {
        color: var(--text-title);
        line-height: 2.5rem;
    }

    input {
        
        padding: 1rem;
        border: 0;
        margin-top: 1.5rem;
        background-color: var(--background);
        border-bottom: 1px solid var(--gray);
        color: #fff;

        &::placeholder{
            color: var(--gray);
            
        }
    }

    button {
        color: #000;
        font-size: large;
        font-weight: bold;
        background-color: var(--yellow);
        padding: 1rem 2rem;
        border: 0;
        margin-top: 3rem;
        border-radius: 5px;
        transition: filter 0.2s;
    }

    button:hover{
        filter: brightness(0.6);
    }
`;