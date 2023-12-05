import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 50px;
    z-index: 999;

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
export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid #bfbfbf;
`

export const ContainerItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 20px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 9;

    @media (max-width: 820px) {
        padding: 4vh 5vw;
    }

    @media (max-width: 414px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const Li = styled.li`
    cursor: pointer;
    animation: ${fadeIn} 0.5s linear;

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
`
