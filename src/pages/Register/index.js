import React, { useState } from 'react';
import * as S from './styled';
import * as H from '../Home/styled';
import * as L from '../Login/styled';
import logo from '../../assets/logo-caju.png';
import { useHistory } from 'react-router-dom';
import toast from 'react-simple-toasts';

export default function Register() {

    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ loginEmail, setLoginEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ address, setAddress ] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let customersList = localStorage.getItem('customers');
        
        let id = 1;
        
        if(customersList !== null) {

            customersList = JSON.parse(customersList);

            customersList.map((c) => {
                id++;
            })

            let customer = {
                "id": id,
                "name": name,
                "lastName": lastName,
                "loginEmail": loginEmail,
                "password": password,
                "address": address
            }

            customersList.push(customer);
            localStorage.setItem('customers', JSON.stringify(customersList));

        } else {
            let customer = {
                "id": id,
                "name": name,
                "lastName": lastName,
                "loginEmail": loginEmail,
                "password": password,
                "address": address
            }

            customersList = [];
            customersList.push(customer);
            localStorage.setItem('customers', JSON.stringify(customersList));
        }

        toast('Cadastro realizado com sucesso! Faça o login na sua conta.');


        setTimeout(() => { 
            history.push('/login');
          }, 2000)

    }

    return(
        <H.PageContainer>
            <L.Header>
                <L.LogoLink to="/">
                    <L.Logo src={logo} />
                </L.LogoLink>
            </L.Header>
            <L.SectionTwo>
                
                <L.LoginForm onSubmit={handleSubmit}>
                    <S.Icon to="/login"><i class="fas fa-angle-left"></i> Voltar</S.Icon>
                    <L.FormTitle>Cadastro</L.FormTitle>
                    <L.Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} autoComplete="none" required />
                    <L.Input type="text" placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} autoComplete="none" />
                    <L.Input type="text" placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} autoComplete="none" required />
                    <L.Input type="email" placeholder="E-mail" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} autoComplete="none" required />
                    <L.Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} autoComplete="none" required />
                    <L.Button type="submit" value="Cadastrar" />
                </L.LoginForm>
            </L.SectionTwo>
            <L.Footer>
                <L.FooterText>
                    © 2021, Caju. Desenvolvido por 
                    <H.ProjectLink href="https://github.com/lohannaaires/caju-store" target="_blank">
                        Lohanna Aires
                    </H.ProjectLink>.
                </L.FooterText>
            </L.Footer>
        </H.PageContainer>
    );
}