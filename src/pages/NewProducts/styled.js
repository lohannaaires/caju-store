import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Icon = styled(Link)`
    position: absolute;
    top: 120px;
    left: 15px;
    color: #000;
    margin-right: 50px;
    padding:10px;
    background: #f6ab67;
    border-radius: 50%;
    text-decoration: none;
    z-index: 1;

    @media all and (max-width: 630px) {
        top: 171px;
    }
`;

export const SectionOne = styled.section`
    display: flex;
    align-items:center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: 0;

    @media (min-height: 1000px) {
        padding: 0;
        height: 75vh;
    }
`;