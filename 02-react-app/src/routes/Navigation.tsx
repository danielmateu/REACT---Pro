import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";
import logo from "../assets/react.svg";

export const Navigation = () => {
    return (
        <Suspense
            fallback={
                <span className="loading">
                    <img src={logo} alt="React Logo" />
                    <h1>Loading...</h1>
                </span>
            }
        >
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {/* Crear NavLink dinamicos */}
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={name}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                                        >{name}</NavLink>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {/* Crear Routes dinamicos */}
                        {
                            routes.map(({ to, path, Component }) => (
                                <Route
                                    key={to}
                                    path={path}
                                    element={<Component />}
                                />
                            )
                            )
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </Suspense>
    )
}
