import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    background-color: rgb(34, 40, 49);
    
    @media all and (max-width: 630px) {
        flex-direction: column;
        height: 100px;
        justify-content: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        z-index: 2;
    }
`;

export const LogoLink = styled(Link)`
    
`;

export const Logo = styled.img`
    margin: 5px 0;
    padding: 5px;
    width: 255px;
    position: static;

    @media all and (max-width: 630px) {
        width: 120px;
    }
`;

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
    }

    @media (min-height: 730px) {
        padding: 0;
        height: 70vh;
    }

    @media (min-height: 1000px) {
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
        padding: 0;
        padding-bottom: 50px;
        border-radius: 0;
    }

    @media (min-height: 730px) {
        padding-top: 25px;
        height: 100%;
    }
`;

export const FormTitle = styled.h1`
    width: 100%;
    margin-bottom: 30px;
    font-size: 1.5rem;
    color: #2C2D34;
    padding-bottom: 20px;

    @media all and (max-width: 630px) {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 10px;
    }
`;

export const Input = styled.input`
    display: block;
    margin-top: 20px;
    padding: 10px;
    width: 500px;	
    border-radius: 20px;
    border: solid 3px #fff;	
    outline: none;
    transition: border 0.5s;
    -webkit-transition: border 0.5s;
    -moz-transition: border 0.5s;
    -o-transition: border 0.5s;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    font-size: 1.1em;
    color: #676767;
    text-decoration: none;

    &:focus {
        border: solid 3px #f6ab67;
    }

    @media all and (max-width: 630px) {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
`;

export const Button = styled.input`
    display: block;
    margin-top: 20px;
    padding: 10px;
    width: 500px;	
    border-radius: 20px;
    border: solid 3px #fff;	
    outline: none;
    transition: border 0.5s;
    -webkit-transition: border 0.5s;
    -moz-transition: border 0.5s;
    -o-transition: border 0.5s;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    font-size: 1.1em;
    color: #676767;
    text-decoration: none;

    margin-top: 30px;
    height: 50px;
    font-size: 1.29em;
    background-color: rgb(34, 40, 49);
    color: white;
    cursor: pointer;
    -webkit-transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -o-transition: background-color 0.5s;
    transition: background-color 0.5s;
    text-align: center;

    &:hover {
        border: solid 3px #f6ab67;
        color: #f6ab67;
    }

    @media all and (max-width: 630px) {
        width: 90%;
        margin: 30px auto 0 auto;
    }
`;

export const RegisterText = styled.h3`
    width: 100%;
    margin-top: 50px;
    color: #2C2D34;

    @media all and (max-width: 630px) {
        width: 100%;
    }
`;

export const RegisterLink = styled(Link)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    color: blue;
    text-decoration: none;
`;

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    height: 20vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(34, 40, 49);
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
`;

export const FooterText = styled.p`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 30px 5px;
`;