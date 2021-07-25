import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './styled';
import * as H from '../Home/styled';
import * as L from '../Login/styled';
import logo from '../../assets/logo-caju.png';
import produto1 from '../../assets/berrio-lata.png';
import produto2 from '../../assets/cajuina-brasucos.png';
import produto3 from '../../assets/castanha1.png';
import produto4 from '../../assets/castanha2.png';

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

                    <H.Card>
                        <H.Cardimage src={produto1} alt="Cerveja Berrió do Piauí em lata" />
                        <H.CardTitle>
                            <H.TesteTitle>Berrió <br/> do Piauí</H.TesteTitle>
                        </H.CardTitle>
                        <H.TesteTitle>Cerveja com caju</H.TesteTitle>
                        <H.TesteTitle>R$10,00</H.TesteTitle>
                    </H.Card>

                    <H.Card>
                        <H.Cardimage src={produto2} alt="Cajuína BraSucos" />
                        <H.CardTitle>
                            <H.TesteTitle>Cajuína <br/> BraSucos</H.TesteTitle>
                        </H.CardTitle>
                        <H.TesteTitle>Descrição</H.TesteTitle>
                        <H.TesteTitle>R$10,00</H.TesteTitle>
                    </H.Card>

                    <H.Card>
                        <H.Cardimage src={produto3} alt="Castanha de Caju" />
                        <H.CardTitle>
                            <H.TesteTitle>Castanha de caju <br/> Bom Sabor</H.TesteTitle>
                        </H.CardTitle>
                        <H.TesteTitle>Descrição</H.TesteTitle>
                        <H.TesteTitle>R$10,00</H.TesteTitle>
                    </H.Card>

                    <H.Card>
                        <H.Cardimage src={produto4} alt="Castanha de Caju Caramelizada" />
                        <H.CardTitle>
                            <H.TesteTitle>Castanha de caju caramelizada Bom Sabor</H.TesteTitle>
                        </H.CardTitle>
                        <H.TesteTitle>Descrição</H.TesteTitle>
                        <H.TesteTitle>R$10,00</H.TesteTitle>
                    </H.Card>

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