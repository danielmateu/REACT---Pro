import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import logo from "../assets/react.svg";
import { Lazypage1, Lazypage2, Lazypage3 } from "../01-lazyload/pages";


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink
                                to="/lazy1"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy2"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy3"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<Lazypage1 />} />
                    <Route path="lazy2" element={<Lazypage2 />} />
                    <Route path="lazy3" element={<Lazypage3 />} />

                    <Route path="/*" element={<Navigate to="/lazy1" replace={true} />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
