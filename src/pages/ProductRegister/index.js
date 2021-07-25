import React, { useState } from 'react';
import * as S from './styled';
import * as H from '../Home/styled';
import * as L from '../Login/styled';
import * as R from '../Register/styled';
import logo from '../../assets/logo-caju.png';
import toast from 'react-simple-toasts';


export default function ProductRegister() {
    
    const [ productName, setProductName ] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let productsList = localStorage.getItem('products');
        
        let id = 1;
        

        if(productsList !== null) {

            productsList = JSON.parse(productsList);

            productsList.map((prod) => {
                id++;
            })

            let product = {
                "id": id,
                "name": productName,
                "photo": photo,
                "description": description,
                "price": price
            }

            productsList.push(product);
            localStorage.setItem('products', JSON.stringify(productsList));

        } else {
            let product = {
                "id": id,
                "name": productName,
                "photo": photo,
                "description": description,
                "price": price
            }

            productsList = [];
            productsList.push(product);
            localStorage.setItem('products', JSON.stringify(productsList));
        }

        toast('Produto cadastrado com sucesso!')
    }

    return(
        <H.PageContainer>
            <L.Header>
                <div>
                    <L.Logo src={logo} />
                </div>
            </L.Header>
            <L.SectionTwo>
                
                <L.LoginForm onSubmit={handleSubmit}>
                    <R.Icon to="/inventario"><i className="fas fa-angle-left"></i> Voltar</R.Icon>
                    <L.FormTitle>Cadastro <S.Break /> de Produtos</L.FormTitle>
                    <L.Input type="text" placeholder="Nome do produto" value={productName} onChange={e => setProductName(e.target.value)} autoComplete="none" required />
                    <L.Input type="text" placeholder="Foto" value={photo} onChange={e => setPhoto(e.target.value)} autoComplete="none" required />
                    <L.Input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} autoComplete="none" required />
                    <L.Input type="number" min="0" step="0.01" placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} autoComplete="none" required />
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