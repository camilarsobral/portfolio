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
    z-index: 99;
    position: fixed;
    padding: 5vh 5vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    animation: ${fadeIn} 0.5s linear;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: uppercase;

    h4 {
        font-weight: 900;
        font-size: 2.3rem;
    }

    p {
        font-weight: 400;
        font-size: 1.29rem;
    }
`

export const Links = styled.ul`
    list-style: none;
    text-transform: lowercase;
    display: flex;
    gap: 25px;
`

export const Li = styled.li`
    color: #000;

    a {
        text-decoration: none;
        color: #000;
        font-size: ${(props) => (props.isActive ? '1.3rem' : '1.1rem')};
        font-weight: ${(props) => (props.isActive ? '700' : '400')};
        transition: 0.3s;

        &:hover {
            opacity: 0.6;
            font-size: 1.6rem;
        }

        &:active {
            opacity: 0.2;
        }
    }
`
