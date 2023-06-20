import { Outlet } from 'react-router-dom'

import Navigation from '../components/navigation'

function DefaultLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default DefaultLayout
