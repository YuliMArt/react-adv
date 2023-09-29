import { LazyExoticComponent, lazy } from "react";
type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName:"LazyPage"*/"../01-lazyload/pages/Lazypage"));
const Lazy2 = lazy(() => import(/* webpackChunkName:"LazyPage2"*/"../01-lazyload/pages/Lazypage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName:"LazyPage3"*/"../01-lazyload/pages/Lazypage3"));
export const routes = [
  {
    to: "/lazy",
    path: "lazy",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];
