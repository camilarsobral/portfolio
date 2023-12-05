import styled, { keyframes } from 'styled-components'

const trackOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
`

export const Container = styled.div`
    background: #e6e6e6;
    height: 100vh;
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    p {
        font-size: 2.3rem;
        font-weight: 300;
        animation: ${trackOut} 2s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    }

    p.myname {
        font-weight: 700;
    }
`
