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
                <Li isActive={pathname === '/home'} className="notranslate">
                    <Link to={'/home'}>Home</Link>
                </Li>
                <Li isActive={pathname === '/projects'} className="notranslate">
                    <Link to={'/projects'}>Projects</Link>
                </Li>
                <Li isActive={pathname === '/contact'} className="notranslate">
                    <Link to={'/contact'}>Contact</Link>
                </Li>
            </Links>
        </Container>
    )
}

export default Navigation
