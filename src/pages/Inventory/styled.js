import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Icon = styled(Link)`
    position: absolute;
    top: 130px;
    left: 15px;
    color: #000;
    margin-right: 50px;
    padding:15px;
    background: #f6ab67;
    border-radius: 50%;
    text-decoration: none;
    z-index: 1;

    @media all and (max-width: 630px) {
        top: 110px;
        padding: 10px;
    }
`;

export const SectionOne = styled.section`
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

    @media (min-height: 1000px) {
        padding: 0;
        height: 75vh;
    }
`;