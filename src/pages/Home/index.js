import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './styled';
import logo from '../../assets/logo-caju.png';
import novosProdutos from '../../assets/novos-produtos.jpg';
import produto1 from '../../assets/berrio-lata.png';
import produto2 from '../../assets/cajuina-brasucos.png';
import produto3 from '../../assets/castanha1.png';
import produto4 from '../../assets/castanha2.png';
import Sidebar from '../../components/Sidebar';

export default function Home() {

    const [ name, setName ] = useState('');
    const [ logged, setLogged ] = useState(false);

    useEffect(() => {
        let session = localStorage.getItem('session');
        
        if(session !== null) {
            //Transforma de volta em um objeto no formato JSON:
            session = JSON.parse(session);

            session.map((s) => {
                setName(s.name);
            });

            setLogged(true);

        } else {
            setLogged(false);
        }

        
    }, []);


    return(
        <S.PageContainer>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <S.Header>
                <S.ImgLink to="/">
                    <S.Logo src={logo} />
                </S.ImgLink>
                <S.FormMax>
                    <S.SearchInput type="text" placeholder="Buscar produto" required/>
                    <S.SearchButton type="submit" value="Buscar"><i class="fas fa-search"></i></S.SearchButton>
                </S.FormMax>
                <S.IconsContainer>
                    <S.Icon to="/"><i class="fas fa-heart"></i></S.Icon>
                    <S.Icon to="/"><i class="fas fa-shopping-cart"></i></S.Icon>
                    { logged ? <S.Logged><i class="fas fa-user"></i> {name}</S.Logged> : <S.Icon to="/login"><i class="fas fa-user"></i> Entrar</S.Icon>}
                    <S.Icon to="/panel"><i class="fas fa-user-lock"></i></S.Icon>
                </S.IconsContainer>
            </S.Header>
            <S.FormMin id="min-form">
                <S.SearchInput type="text" placeholder="Buscar produto" required/>
                <S.SearchButton type="submit" value="Buscar"><i class="fas fa-search"></i></S.SearchButton>
            </S.FormMin>
            <S.NavBar>
                <div id="page-wrap"></div>
                <S.NavItemsContainer>
                    <S.NavItem to="/">Todos os Produtos</S.NavItem>
                    <S.NavItem to="/">Alimentos</S.NavItem>
                    <S.NavItem to="/">Bebidas</S.NavItem>
                </S.NavItemsContainer>
            </S.NavBar>
            
            <S.SectionOne>
                <S.ImgLink to="/novos-produtos">
                    <S.ImgSectionOne src={novosProdutos}/>
                </S.ImgLink>
            </S.SectionOne>
            <S.SectionTwo>
                <S.FormTitle>Cadastre o seu e-mail para receber cupons e descontos especiais!</S.FormTitle>
                <S.NewsForm>
                    <S.Input type="email" placeholder="nome@dominio.com" autoComplete="none" required/>
                    <S.Button type="submit" value="Cadastrar"/>
                </S.NewsForm>
            </S.SectionTwo>
            <S.SectionThree>
                <S.SectionTitle>Mais Vendidos</S.SectionTitle>
                <S.CardsContainer>
                    <S.Card>
                        <S.Cardimage src={produto1} alt="Cerveja Berrió do Piauí em lata" />
                        <S.CardTitle>
                            <S.TesteTitle>Berrió <br/> do Piauí</S.TesteTitle>
                        </S.CardTitle>
                    </S.Card>

                    <S.Card>
                        <S.Cardimage src={produto2} alt="Cajuína BraSucos" />
                        <S.CardTitle>
                            <S.TesteTitle>Cajuína <br/> BraSucos</S.TesteTitle>
                        </S.CardTitle>
                    </S.Card>

                    <S.Card>
                        <S.Cardimage src={produto3} alt="Castanha de Caju" />
                        <S.CardTitle>
                            <S.TesteTitle>Castanha de caju <br/> Bom Sabor</S.TesteTitle>
                        </S.CardTitle>
                    </S.Card>

                    <S.Card>
                        <S.Cardimage src={produto4} alt="Castanha de Caju Caramelizada" />
                        <S.CardTitle>
                            <S.TesteTitle>Castanha de caju caramelizada Bom Sabor</S.TesteTitle>
                        </S.CardTitle>
                    </S.Card>
                </S.CardsContainer>
            </S.SectionThree>
            <S.Footer>
                <S.FooterText>
                    © 2021, Caju. Desenvolvido por 
                    <S.ProjectLink href="https://github.com/lohannaaires/caju-store" target="_blank">
                        Lohanna Aires
                    </S.ProjectLink>.
                </S.FooterText>

                <S.FooterContent>
                    <S.ContactContent>
                        <p>Contate-nos</p>
                        <S.ContactIconsContainer>
                            <S.SocialLink href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank" class="social-container__item">
                                <i class="fab fa-whatsapp 2x"></i> +55 (99) 11111-2222
                            </S.SocialLink>
                            <S.SocialLink href="tel:+5502122222222" target="_blank" class="social-container__item">
                                <i class="fas fa-phone-square 2x"></i> +55 (21) 2222-2222
                            </S.SocialLink>
                            <S.SocialLink href="mailto:nome@dominio.com" target="_blank" class="social-container__item">
                                <i class="far fa-envelope 2x"></i> lojacaju@dominio.com
                            </S.SocialLink>
                        </S.ContactIconsContainer>
                    </S.ContactContent>

                    <S.ContactContent>
                        <p>Nossas Redes</p>
                        <div>
                            <S.SocialLink href="https://www.instagram.com/lohannaaires/" target="_blank">
                                <i class="fab fa-instagram fa-2x"></i>
                            </S.SocialLink>
                            <S.SocialLink href="https://twitter.com/l_aires" target="_blank">
                                <i class="fab fa-twitter-square fa-2x"></i>
                            </S.SocialLink>
                            <S.SocialLink href="https://www.facebook.com/lohannaaires/" target="_blank">
                                <i class="fab fa-discord fa-2x"></i>
                            </S.SocialLink>
                        </div>
                    </S.ContactContent>

                    <S.ContactContent>
                        <p>Formas de Pagamento</p>
                        <div>
                            <S.PaymentIcon className="fab fa-cc-mastercard fa-2x"></S.PaymentIcon>
                            <S.PaymentIcon className="fab fa-cc-visa fa-2x"></S.PaymentIcon>
                            <S.PaymentIcon className="fas fa-barcode fa-2x"></S.PaymentIcon>
                        </div>
                    </S.ContactContent>
                </S.FooterContent>

            </S.Footer>
        </S.PageContainer>
    );
}