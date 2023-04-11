import { Lazypage1, Lazypage2, Lazypage3 } from "../01-lazyload/pages";
// import { Routes } from 'react-router-dom';

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element
    name: string;
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazypage1,
        name: 'Lazy1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazypage2,
        name: 'Lazy2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazypage3,
        name: 'Lazy3',
    }
]
