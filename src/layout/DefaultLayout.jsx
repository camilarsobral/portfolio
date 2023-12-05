import { Outlet } from 'react-router-dom'

import AnimatedBackground from '../components/animatedbg'
import Navigation from '../components/navigation'

function DefaultLayout() {
    return (
        <>
            <AnimatedBackground />
            <Navigation />
            <Outlet />
        </>
    )
}

export default DefaultLayout
