import { Link } from 'react-router-dom'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { Container, ContainerItems, Li } from './styles'

function Contact() {
    return (
        <Container>
            <ContainerItems>
                <Li>
                    <Link
                        to={'https://www.linkedin.com/in/camilarsobral/'}
                        target="_blank"
                    >
                        <LinkedInIcon fontSize="large" />
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'https://github.com/camilarsobral/'}
                        target="_blank"
                    >
                        <GitHubIcon fontSize="large" />
                    </Link>
                </Li>
                <Li>
                    <Link
                        to={'mailto:camilarsobral@hotmail.com'}
                        target="_blank"
                    >
                        <EmailIcon fontSize="large" />
                    </Link>
                </Li>
            </ContainerItems>
        </Container>
    )
}

export default Contact
