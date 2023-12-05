import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

function Loading() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/home', { replace: true })
        }, 2000)
    }, [navigate])

    return (
        <Container>
            <p className="myname">Camila Sobral</p>
            <p>Portfolio</p>
        </Container>
    )
}

export default Loading
