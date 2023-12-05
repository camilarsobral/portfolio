import { Link } from 'react-router-dom'

import { Container, Wrapper, ContainerItems, Li } from './styles'

function Projects() {
    return (
        <Container>
            <Wrapper>
                <ContainerItems>
                    <Li>
                        <Link to={'https://baykalmed.com.br/'} target="_blank">
                            <span>01.</span> BAYKAL MED
                        </Link>
                    </Li>
                    <Li>
                        <Link
                            to={'https://codeburger-frontend.vercel.app/'}
                            target="_blank"
                        >
                            <span>02.</span> CODEBURGER
                        </Link>
                    </Li>
                    <Li>
                        <Link
                            to={'https://react-devmovies.vercel.app/'}
                            target="_blank"
                        >
                            <span>03.</span> DEVMOVIES
                        </Link>
                    </Li>
                    <Li>
                        <Link
                            to={'https://react-todo-list-dun.vercel.app/'}
                            target="_blank"
                        >
                            <span>04.</span> TO-DO LIST
                        </Link>
                    </Li>
                    <Li>
                        <Link
                            to={'https://menu-outback.netlify.app/'}
                            target="_blank"
                        >
                            <span>05.</span> CARDÁPIO OUTBACK
                        </Link>
                    </Li>
                </ContainerItems>
            </Wrapper>
        </Container>
    )
}

export default Projects
