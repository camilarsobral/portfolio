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

export const ContainerItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
    padding: 6vh 5vw;
    position: absolute;
    width: 60%;
    height: 50%;
    right: 0;
    bottom: 0;
    z-index: 9;

    @media (max-width: 820px) {
        padding: 4vh 5vw;
    }

    @media (max-width: 414px) {
        align-items: flex-start;
        gap: 10px;
        padding: 4vh 5vw;
        width: 100%;
        left: 0;
    }
`

export const Li = styled.li`
    font-size: 2rem;
    color: #000;
    cursor: pointer;
    animation: ${fadeIn} 0.5s linear;

    span {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: #000;

        &:hover {
            opacity: 0.5;
            transition: 0.3s;
            font-size: 2.5rem;
        }

        &:active {
            opacity: 0.2;
        }
    }

    @media (max-width: 414px) {
        font-size: 1.8rem;
    }
`
