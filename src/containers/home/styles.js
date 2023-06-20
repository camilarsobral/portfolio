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

    @media (max-width: 1280px) {
        background-size: 70%;
        background-position-x: -50px;
        background-position-y: 135px;
    }

    @media (max-width: 820px) {
        background-size: cover;
        background-position-x: -550px;
        background-position-y: -130px;
    }

    @media (max-width: 414px) {
        background-size: cover;
        background-position-x: -300px;
        background-position-y: 130px;

        &::before {
            background-color: rgba(255, 255, 255, 0.85);
        }
    }
`

export const ContainerItems = styled.div`
    position: absolute;
    width: 40%;
    height: 50%;
    right: 0;
    bottom: 0;
    z-index: 999999999;

    @media (max-width: 820px) {
        width: 50%;
    }

    @media (max-width: 414px) {
        width: 90%;
        height: 60%;
        left: 0;
    }
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

    @media (max-width: 820px) {
        padding: 4vh 5vw;
    }

    @media (max-width: 414px) {
        padding: 3vh 5vw;
        text-align: left;

        p {
            font-size: 0.9rem;
        }
    }
`
