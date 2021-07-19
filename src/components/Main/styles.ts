import styled from "styled-components";

export const Container = styled.main`
    max-width: 1600px;
    height: 100vh;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    display: flex;
    flex-direction: column;
   
   & main{
       
       margin: 0 auto;
   }

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
`;
