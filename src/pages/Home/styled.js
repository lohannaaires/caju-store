import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-family: "Quicksand", sans-serif;
    top: 0px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    background-color: rgb(34, 40, 49);
    overflow: hidden;
    z-index: 2;
    
    @media all and (max-width: 630px) {
        flex-direction: column;
        height: 100px;
        justify-content: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
    }
`;


export const Logo = styled.img`
    margin: 0;
    padding: 0;
    height: 45px;

    @media all and (max-width: 630px) {
        width: 120px;
        height: auto;
        padding: 6px;
    }
`;

export const FormMax = styled.form`
    display: flex;
    width: 50%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: static;

    @media all and (max-width: 630px) {
        display: none;
        visibility: hidden;
    }
`;

export const FormMin = styled.form`
    display: none;

    @media all and (max-width: 630px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: inline-block;
        position: static;
        background: #676767;
    }
`;

export const SearchInput = styled.input`
    margin: 15px 0;
    padding: 5px;
    height: 30px;
    width: 80%;
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
	color: #676767;
    text-decoration: none;

    &:focus {
        border: solid 3px #f6ab67;
    }
`;

export const SearchButton = styled.button`
    padding: 5px;
    border-radius: 50%;
    border: solid 3px #fff;	
	outline: none;
	transition: border 0.5s;
	-webkit-transition: border 0.5s;
	-moz-transition: border 0.5s;
	-o-transition: border 0.5s;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
    background: transparent;
	color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border: solid 3px #f6ab67;
        color: #f6ab67;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    position: static;
    justify-content: center;
    
`;

export const Icon = styled(Link)`
    color: #fff;
    padding: 5px;
    margin-right: 15px;
    text-decoration: none;

    &:hover {
        color: #f6ab67;	
    }
`;

export const Logged = styled(Link)`
    color: #fff;
    padding: 5px;
    margin-right: 15px;
    text-decoration: none;
    pointer-events: none;

    &:hover {
        color: #f6ab67;	
    }
`;

export const NavBar = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #676767;
    color: #fff;

    @media all and (max-width: 630px) {
        display: none;
        visibility: hidden;
    }
`;

export const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NavItem = styled(Link)`
    padding: 15px;
    margin: auto 60px;
    text-decoration: none;
    color: #fff;

    &:hover {
        background: #f6ab67;
        color: #000;	
    }
`;

export const SectionOne = styled.section`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    margin: 0;
`;

export const ImgSectionOne = styled.img`
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const ImgLink = styled(Link)`
    
`;

export const SectionTwo = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: #676767;
    width: 100%;
    margin: 0;

    @media all and (max-width: 630px) {
        flex-direction: column;
        padding: 25px 0;
    }
`;

export const FormTitle = styled.h1`
    margin: 0 15px;
    width: 30%;
    padding: 0;
    color: #000;

    @media all and (max-width: 630px) {
        width: 90%;
    }
`;

export const NewsForm = styled.form`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    position: static;

    @media all and (max-width: 630px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    margin: 0 0 0 15px;
    padding: 5px;
    width: 80%;
    height: 30px;
    border-radius: 25px 0 0 25px;
    border: solid 3px #fff;	
	outline: none;
	transition: border 0.5s;
	-webkit-transition: border 0.5s;
	-moz-transition: border 0.5s;
	-o-transition: border 0.5s;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
	color: #676767;
    text-decoration: none;

    &:focus {
        border: solid 3px #f6ab67;
    }

    @media all and (max-width: 630px) {
        width: 90%;
        margin-left: 25px;
    }
`;

export const Button = styled.input`
    margin: 15px 30px 15px 0;
    padding: 5px;
    border-radius: 0 25px 25px 0 ;
    border: solid 3px #000;	
	outline: none;
	transition: border 0.5s;
	-webkit-transition: border 0.5s;
	-moz-transition: border 0.5s;
	-o-transition: border 0.5s;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
    background: #000;
	color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &:hover {
        border: solid 3px #f6ab67;
        color: #f6ab67;
    }

    @media all and (max-width: 630px) {
        margin-right: 25px;
    }
`;

export const SectionThree = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding:0;

    @media all and (max-width: 630px) {
        flex-direction: column;
    }
`;

export const SectionTitle = styled.h1`
    padding-top: 40px;
    margin-top: 40px;
    width: 100%;
    color: #000;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin: 40px 0;
    width: 100%

    @media all and (max-width: 630px) {
        margin: 0;
        padding:0;
    }
`;


    
export const Card = styled.div`
    margin: 30px 30px;
    width: 200px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    transition: 0.4s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(0.95, 0.95);
    }

    @media all and (max-width: 630px) {
        pointer-events: none;
        margin: 20px 30px;
    }
`;

export const Cardimage = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width:100%;
`;

export const CardTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    padding:0;
    margin:0;
`;

export const TesteTitle = styled.h4`
    padding:0;
    margin:0;
`;


export const Footer = styled.footer`
    display: flex;
    width: 100%;
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
    align-items: center;
    justify-content: center;
    margin: 30px 5px;
`;

export const ProjectLink = styled.a`
    text-decoration: none;
    margin-left: 5px;
    color: #f6ab67;
`;

export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto auto 30px auto;

    @media all and (max-width: 630px) {
        flex-direction: column;
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 630px) {
        width: 100%;
    }
`;

export const ContactIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SocialLink = styled.a`
    color: #f6ab67;
    margin: 0 15px;
    text-decoration: none;
`;

export const PaymentIcon = styled.i`
    color: #f6ab67;
    margin: 0 15px;
`;