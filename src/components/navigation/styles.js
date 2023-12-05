import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`

const blink = keyframes`
    from { border-color: transparent }
    to { border-color: #fd84d4; }
`

export const Container = styled.div`
    z-index: 9999;
    position: absolute;
    top: 80px;
    padding: 0 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    animation: ${fadeIn} 0.5s linear;

    @media (max-width: 820px) {
        padding: 4vh 6vw;
    }

    @media (max-width: 414px) {
        padding: 3vh 5vw;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`
export const Typewriter = styled.div`
    display: inline-block;

    .typed-out {
        overflow: hidden;
        border-right: 0.15em solid #fd84d4;
        white-space: nowrap;
        font-size: 1.3rem;
        width: 0;
        animation: ${typing} 1.5s steps(20, end) forwards,
            ${blink} 0.8s infinite;
        font-family: 'Raleway', sans-serif;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h4 {
        font-weight: 300;
        font-size: 3.2rem;
        font-family: 'Raleway', sans-serif;
    }

    @media (max-width: 414px) {
        align-items: center;

        h4 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const Links = styled.ul`
    list-style: none;
    text-transform: uppercase;
    display: flex;
    gap: 25px;
`

export const Li = styled.li`
    color: #000;

    a {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
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
