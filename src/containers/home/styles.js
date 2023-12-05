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
`

export const ContainerItems = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid #bfbfbf;

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
    width: 30%;
    text-align: right;
    position: absolute;
    bottom: 30px;
    right: 30px;
    animation: ${fadeIn} 0.5s linear;

    p {
        font-size: 0.95rem;
        font-family: 'Montserrat', sans-serif;

        span {
            font-size: 0.7rem;
            font-weight: bold;
        }
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
