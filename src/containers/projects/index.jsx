import { Link } from 'react-router-dom'

import { Container, ContainerItems, Li } from './styles'

function Projects() {
    return (
        <Container>
            <ContainerItems>
                <Li>
                    <Link
                        to={'https://codeburger-frontend.vercel.app/'}
                        target="_blank"
                    >
                        <span>01.</span> CODEBURGER
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://react-devmovies.vercel.app/'}
                        target="_blank"
                    >
                        <span>02.</span> DEVMOVIES
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://react-todo-list-dun.vercel.app/'}
                        target="_blank"
                    >
                        <span>03.</span> TO-DO LIST
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://menu-outback.netlify.app/'}
                        target="_blank"
                    >
                        <span>04.</span> CARDÁPIO OUTBACK
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://react-todo-list-dun.vercel.app/'}
                        target="_blank"
                    >
                        <span>05.</span> MONEY CONVERTER
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://react-todo-list-dun.vercel.app/'}
                        target="_blank"
                    >
                        <span>06.</span> TINDOG
                    </Link>
                </Li>
            </ContainerItems>
        </Container>
    )
}

export default Projects
