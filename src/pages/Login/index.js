import React, { useState } from 'react';
import * as S from './styled';
import * as H from '../Home/styled';
import logo from '../../assets/logo-caju.png';
import { useHistory } from 'react-router-dom';
import toast from 'react-simple-toasts';


export default function Login() {

    const history = useHistory();

    const [ loginEmail, setLoginEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let customersList = localStorage.getItem('customers');
        let session = [];
        
        let id = 1;
        
        if(customersList !== null) {

            customersList = JSON.parse(customersList);

            customersList.map((c) => {
                if(c.loginEmail === loginEmail && c.password === password) {

                    let data = {
                        "id": c.id,
                        "name": c.name,
                        "loginEmail": c.loginEmail
                    }

                    session.push(data);
                    localStorage.setItem('session', JSON.stringify(session));

                    toast('Seja bem-vindo(a)!');

                    history.push('/');

                } else {
                    toast('Usuário não encontrado. Tente novamente.');
                }
            });

        } else {
            toast('Ocorreu um erro. Tente novamente ou cadastre uma nova conta.');
        }

    }

    return(
        <H.PageContainer>
            <S.Header>
                <S.LogoLink to="/">
                    <S.Logo src={logo} />
                </S.LogoLink>
            </S.Header>
            <S.SectionTwo>
                <S.LoginForm onSubmit={handleSubmit}>
                    <S.FormTitle>Login</S.FormTitle>
                    <S.Input type="email" placeholder="E-mail" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} autoComplete="none" required />
                    <S.Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} autoComplete="none" required />
                    <S.Button type="submit" value="Entrar" />
                    <S.RegisterText>Não possui uma conta? <S.RegisterLink to="/cadastro">Cadastre-se</S.RegisterLink></S.RegisterText>
                </S.LoginForm>
            </S.SectionTwo>
            <S.Footer>
                <S.FooterText>
                    © 2021, Caju. Desenvolvido por 
                    <H.ProjectLink href="https://github.com/lohannaaires/caju-store" target="_blank">
                        Lohanna Aires
                    </H.ProjectLink>.
                </S.FooterText>
            </S.Footer>
        </H.PageContainer>
    );
}