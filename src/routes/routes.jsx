import { Route, Routes } from 'react-router-dom'

import Contact from '../containers/contact'
import Home from '../containers/home'
import Loading from '../containers/loading'
import Projects from '../containers/projects'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route>
                <Route path="/" exact element={<Loading />} />
            </Route>
        </Routes>
    )
}

export default Router
