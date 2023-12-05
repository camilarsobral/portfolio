import styled, { keyframes } from 'styled-components'

const move = keyframes`
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #e6e6e6;
    overflow: hidden;

    span {
        width: 50vmin;
        height: 50vmin;
        border-radius: 50vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: ${move};
        animation-duration: 43;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        &:nth-child(0) {
            color: #fbbce1;
            top: 18%;
            left: 15%;
            animation-duration: 72s;
            animation-delay: -29s;
            transform-origin: 8vw -17vh;
            box-shadow: -100vmin 0 13.139258879111829vmin currentColor;
        }

        &:nth-child(1) {
            color: #fbbce1;
            top: 18%;
            left: 15%;
            animation-duration: 72s;
            animation-delay: -29s;
            transform-origin: 8vw -17vh;
            box-shadow: -100vmin 0 13.139258879111829vmin currentColor;
        }

        &:nth-child(2) {
            color: #ebb3ff;
            top: 74%;
            left: 59%;
            animation-duration: 71s;
            animation-delay: -4s;
            transform-origin: 16vw 2vh;
            box-shadow: 100vmin 0 12.717725448182577vmin currentColor;
        }

        &:nth-child(3) {
            color: #ebb3ff;
            top: 23%;
            left: 4%;
            animation-duration: 26s;
            animation-delay: -5s;
            transform-origin: -13vw -13vh;
            box-shadow: -100vmin 0 13.44784557255998vmin currentColor;
        }

        &:nth-child(4) {
            color: #fbbce1;
            top: 57%;
            left: 6%;
            animation-duration: 23s;
            animation-delay: -22s;
            transform-origin: -19vw -20vh;
            box-shadow: 100vmin 0 13.24654968957794vmin currentColor;
        }

        &:nth-child(5) {
            color: #b3cfff;
            top: 81%;
            left: 85%;
            animation-duration: 69s;
            animation-delay: -13s;
            transform-origin: 0vw -2vh;
            box-shadow: -100vmin 0 12.749069470293536vmin currentColor;
        }

        &:nth-child(6) {
            color: #fbbce1;
            top: 98%;
            left: 89%;
            animation-duration: 43s;
            animation-delay: -11s;
            transform-origin: 6vw 11vh;
            box-shadow: -100vmin 0 13.282323706859772vmin currentColor;
        }

        &:nth-child(7) {
            color: #ebb3ff;
            top: 42%;
            left: 41%;
            animation-duration: 50s;
            animation-delay: -17s;
            transform-origin: -9vw -16vh;
            box-shadow: 100vmin 0 13.18509850825601vmin currentColor;
        }

        &:nth-child(8) {
            color: #fbbce1;
            top: 98%;
            left: 28%;
            animation-duration: 56s;
            animation-delay: -14s;
            transform-origin: 11vw -1vh;
            box-shadow: 100vmin 0 12.560618490082744vmin currentColor;
        }

        &:nth-child(9) {
            color: #ebb3ff;
            top: 29%;
            left: 11%;
            animation-duration: 72s;
            animation-delay: -44s;
            transform-origin: -11vw -19vh;
            box-shadow: 100vmin 0 12.694113065116591vmin currentColor;
        }

        &:nth-child(10) {
            color: #b3cfff;
            top: 95%;
            left: 82%;
            animation-duration: 30s;
            animation-delay: -41s;
            transform-origin: -4vw 24vh;
            box-shadow: -100vmin 0 12.798546418307462vmin currentColor;
        }

        &:nth-child(11) {
            color: #ebb3ff;
            top: 7%;
            left: 54%;
            animation-duration: 58s;
            animation-delay: -33s;
            transform-origin: -8vw 5vh;
            box-shadow: 100vmin 0 13.239235215035835vmin currentColor;
        }

        &:nth-child(12) {
            color: #ebb3ff;
            top: 34%;
            left: 88%;
            animation-duration: 7s;
            animation-delay: -56s;
            transform-origin: 25vw 3vh;
            box-shadow: 100vmin 0 13.386282393787663vmin currentColor;
        }

        &:nth-child(13) {
            color: #b3cfff;
            top: 59%;
            left: 71%;
            animation-duration: 25s;
            animation-delay: -55s;
            transform-origin: -19vw -17vh;
            box-shadow: -100vmin 0 12.712260847538747vmin currentColor;
        }

        &:nth-child(14) {
            color: #b3cfff;
            top: 99%;
            left: 33%;
            animation-duration: 44s;
            animation-delay: -4s;
            transform-origin: -5vw 2vh;
            box-shadow: -100vmin 0 13.496178873971733vmin currentColor;
        }
    }
`
