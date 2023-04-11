import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { Lazypage1, Lazypage2, Lazypage3 } from "../pages"
import { routes } from "../../routes/routes"


export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            {/* Aqui irán las rutas hijas */}
            <ul>
                <li>
                    <NavLink to="lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<Lazypage1 />} />
                <Route path="lazy2" element={<Lazypage2 />} />
                <Route path="lazy3" element={<Lazypage3 />} />
                {/* <Route path="/*" element={<div>Not found</div>} /> */}
                <Route path="/*" element={<Navigate replace to = 'lazy1'/>} />
            </Routes>
        </div>
    )
}

export default LazyLayout
