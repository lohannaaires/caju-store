import React, { useEffect, useState } from 'react';
import * as S from './styled';
import * as H from '../Home/styled';
import logo from '../../assets/logo-caju.png';
import Sidebar from '../../components/Sidebar';

export default function NewProducts() {

    const [ name, setName ] = useState('');
    const [ logged, setLogged ] = useState(false);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        let session = localStorage.getItem('session');
        
        if(session !== null) {
            session = JSON.parse(session);

            session.map((s) => {
                setName(s.name);
            });

            setLogged(true);

        } else {
            setLogged(false);
        }

        
        let productsList = localStorage.getItem('products');
        
        if(productsList !== null) {

            productsList = JSON.parse(productsList);
            setProducts(productsList);

        }

    }, []);


    return(
        <H.PageContainer>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <H.Header>
                <H.ImgLink to="/">
                    <H.Logo src={logo} />
                </H.ImgLink>
                
                <H.FormMax>
                    <H.SearchInput type="text" placeholder="Buscar produto" required/>
                    <H.SearchButton type="submit" value="Buscar"><i class="fas fa-search"></i></H.SearchButton>
                </H.FormMax>
                <H.IconsContainer>
                    <H.Icon to="/"><i class="fas fa-heart"></i></H.Icon>
                    <H.Icon to="/"><i class="fas fa-shopping-cart"></i></H.Icon>
                    { logged ? <H.Logged><i class="fas fa-user"></i> {name}</H.Logged> : <H.Icon to="/login"><i class="fas fa-user"></i> Entrar</H.Icon>}
                </H.IconsContainer>
            </H.Header>
            <H.FormMin id="min-form">
                <H.SearchInput type="text" placeholder="Buscar produto" required/>
                <H.SearchButton type="submit" value="Buscar"><i class="fas fa-search"></i></H.SearchButton>
            </H.FormMin>
            <H.NavBar>
                <div id="page-wrap"></div>
                <H.NavItemsContainer>
                    <H.NavItem to="/">Todos os Produtos</H.NavItem>
                    <H.NavItem to="/">Alimentos</H.NavItem>
                    <H.NavItem to="/">Bebidas</H.NavItem>
                </H.NavItemsContainer>
            </H.NavBar>
            
            <S.SectionOne>
                <S.Icon to="/"><i class="fas fa-angle-left"></i> Voltar</S.Icon>
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
            
            <H.Footer>
                <H.FooterText>
                    © 2021, Caju. Desenvolvido por 
                    <H.ProjectLink href="https://github.com/lohannaaires/caju-store" target="_blank">
                        Lohanna Aires
                    </H.ProjectLink>.
                </H.FooterText>

                <H.FooterContent>
                    <H.ContactContent>
                        <p>Contate-nos</p>
                        <H.ContactIconsContainer>
                            <H.SocialLink href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank" class="social-container__item">
                                <i class="fab fa-whatsapp 2x"></i> +55 (99) 11111-2222
                            </H.SocialLink>
                            <H.SocialLink href="tel:+5502122222222" target="_blank" class="social-container__item">
                                <i class="fas fa-phone-square 2x"> </i> +55 (21) 2222-2222
                            </H.SocialLink>
                            <H.SocialLink href="mailto:nome@dominio.com" target="_blank" class="social-container__item">
                                <i class="far fa-envelope 2x"></i> lojacaju@dominio.com
                            </H.SocialLink>
                        </H.ContactIconsContainer>
                    </H.ContactContent>

                    <H.ContactContent>
                        <p>Nossas Redes</p>
                        <div>
                            <H.SocialLink href="https://www.instagram.com/lohannaaires/" target="_blank">
                                <i class="fab fa-instagram fa-2x"></i>
                            </H.SocialLink>
                            <H.SocialLink href="https://twitter.com/l_aires" target="_blank">
                                <i class="fab fa-twitter-square fa-2x"></i>
                            </H.SocialLink>
                            <H.SocialLink href="https://www.facebook.com/lohannaaires/" target="_blank">
                                <i class="fab fa-discord fa-2x"></i>
                            </H.SocialLink>
                        </div>
                    </H.ContactContent>

                    <H.ContactContent>
                        <p>Formas de Pagamento</p>
                        <div>
                            <H.PaymentIcon className="fab fa-cc-mastercard fa-2x"></H.PaymentIcon>
                            <H.PaymentIcon className="fab fa-cc-visa fa-2x"></H.PaymentIcon>
                            <H.PaymentIcon className="fas fa-barcode fa-2x"></H.PaymentIcon>
                        </div>
                    </H.ContactContent>
                </H.FooterContent>

            </H.Footer>
        </H.PageContainer>
    );
}