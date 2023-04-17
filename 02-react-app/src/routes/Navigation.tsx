import { Routes, Route, NavLink, Navigate, BrowserRouter } from "react-router-dom";
import { Lazypage1, Lazypage2, Lazypage3 } from "../01-lazyload/pages";
import { FormikBasicPage, RegisterPage } from "../03-forms/pages";

import logo from "../assets/react.svg";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";



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
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-basic"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >Formik Basic Page</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-yup"
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >Formik Yup Page</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<Lazypage1 />} />
                    <Route path="lazy2" element={<Lazypage2 />} />
                    <Route path="lazy3" element={<Lazypage3 />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />

                    <Route path="/*" element={<Navigate to="/lazy1" replace={true} />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
