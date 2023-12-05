import { Link, useLocation } from 'react-router-dom'

import { Container, Title, Typewriter, Links, Li } from './styles'

function Navigation() {
    const { pathname } = useLocation()

    return (
        <Container>
            <Title>
                <h4>Camila Sobral</h4>
                <Typewriter>
                    <div className="typed-out">Full-Stack Developer_</div>
                </Typewriter>
            </Title>
            <Links>
                <Li isActive={pathname === '/home'}>
                    <Link to={'/home'}>Home</Link>
                </Li>
                <Li isActive={pathname === '/projects'}>
                    <Link to={'/projects'}>Projetos</Link>
                </Li>
                <Li isActive={pathname === '/contact'}>
                    <Link to={'/contact'}>Contato</Link>
                </Li>
            </Links>
        </Container>
    )
}

export default Navigation
