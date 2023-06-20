import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    30% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    animation: ${fadeOut} 2.5s linear;

    p {
        font-size: 2.3rem;
        font-weight: 300;
    }

    p.myname {
        font-weight: 700;
    }
`
