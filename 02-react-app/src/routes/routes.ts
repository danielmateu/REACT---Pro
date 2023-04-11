import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { Lazypage1, Lazypage2, Lazypage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: LazyLayout*/ '../01-lazyload/layout/LazyLayout'));

// const Lazy1 = lazy(() => import(/* webpackChunkName: LazyPage1*/ '../01-lazyload/pages/Lazypage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: LazyPage2*/ '../01-lazyload/pages/Lazypage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: LazyPage3*/ '../01-lazyload/pages/Lazypage3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout',
    },
    {
        to: '/noLazy',
        path: 'noLazy',
        Component: NoLazy,
        name: 'noLazy',
    }
]
