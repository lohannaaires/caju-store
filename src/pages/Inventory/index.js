import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './styled';
import * as H from '../Home/styled';
import * as L from '../Login/styled';
import logo from '../../assets/logo-caju.png';

export default function Inventory() {

    const history = useHistory();

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        let productsList = localStorage.getItem('products');
        
        if(productsList !== null) {

            productsList = JSON.parse(productsList);
            setProducts(productsList);

        }
        
    }, []);


    return(
        <H.PageContainer>
            <L.Header>
                <L.LogoLink to="/">
                    <L.Logo src={logo} />
                </L.LogoLink>
            </L.Header>
            
            <S.SectionOne>
                <S.Icon to="/registro-produto"><i class="fas fa-plus"></i> Novo Produto</S.Icon>
                <H.CardsContainer>
                    { products.map((product) => {
                        return(
                            <H.Card>
                                <H.Cardimage src={product.photo} alt={product.description} />
                                <H.CardTitle>
                                    <H.TesteTitle>{product.name}</H.TesteTitle>
                                </H.CardTitle>
                                <H.TesteTitle>{product.description}</H.TesteTitle>
                                <H.TesteTitle>R${product.price}</H.TesteTitle>
                            </H.Card>
                        )
                        
                    }) }
                </H.CardsContainer>
            </S.SectionOne>
            
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