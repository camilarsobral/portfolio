import styled, { keyframes } from 'styled-components'

import Background from '../../assets/topography.png'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    background: url(${Background});
    height: 100vh;
    width: 100%;
    background-size: 65%;
    background-repeat: no-repeat;
    background-position-x: -50px;
    background-position-y: 35px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.8);
    }
`

export const ContainerItems = styled.div`
    position: absolute;
    width: 40%;
    height: 50%;
    right: 0;
    bottom: 0;
    z-index: 999999999;
    bottom: 0;
`

export const TextBox = styled.div`
    padding: 6vh 5vw;
    text-align: right;
    position: absolute;
    bottom: 0;
    animation: ${fadeIn} 0.5s linear;

    p {
        font-size: 1.05rem;
    }
`
