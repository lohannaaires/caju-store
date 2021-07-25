import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import * as H from '../Home/styled';
import * as L from '../Login/styled';
import logo from '../../assets/logo-caju.png';
import toast from 'react-simple-toasts';

export default function AdmPanel() {

    const history = useHistory();

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(user === 'admin' && password === 'admin') {

            toast('Seja bem-vindo(a)!');

            history.push('/inventario');
           

        } else {
            toast('Usuário não encontrado. Tente novamente.');
        }
    }

    return(
        <H.PageContainer>
            <L.Header>
                <L.LogoLink to="/">
                    <L.Logo src={logo} />
                </L.LogoLink>
            </L.Header>
            <S.SectionTwo>
                <S.LoginForm onSubmit={handleSubmit}>
                    <L.FormTitle>Acesso do Administrador</L.FormTitle>
                    <L.Input type="text" placeholder="Login" value={user} onChange={e => setUser(e.target.value)} autoComplete="none" required />
                    <L.Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} autoComplete="none" required />
                    <L.Button type="submit" value="Entrar" />
                </S.LoginForm>
            </S.SectionTwo>
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