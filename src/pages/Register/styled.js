import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Icon = styled(Link)`
    position: absolute;
    top: 40px;
    left: 25px;
    color: #000;
    margin-right: 50px;
    padding:10px;
    background: #f6ab67;
    border-radius: 50%;
    text-decoration: none;

    @media all and (max-width: 630px) {
        top: 110px;
        left: 15px;
        z-index: 1;
    }
`;