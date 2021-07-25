import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionTwo = styled.section`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 50px 0;
    width: 100%;

    @media all and (max-width: 630px) {
        background: rgba(97, 75, 75, 0.1);
        padding: 0;
        margin: 0;
        height: 65vh;
    }

    @media (min-height: 730px) {
        padding: 0;
        height: 70vh;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    padding: 20px 50px 20px 50px;
    width: 500px;
    background-color: rgba(97, 75, 75, 0.1);
    border-radius: 15px;

    @media all and (max-width: 630px) {
        margin: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60vh;
        padding: 0;
        padding-bottom: 50px;
        border-radius: 0;
    }

    @media (min-height: 730px) {
        padding-top: 25px;
        height: 100%;
    }
`;