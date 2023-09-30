import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';
type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayput = lazy(() => import(/* webpackChunkName:"LazyPage"*/"../01-lazyload/layout/LazyLayout"));
// const Lazy2 = lazy(() => import(/* webpackChunkName:"LazyPage2"*/"../01-lazyload/pages/Lazypage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName:"LazyPage3"*/"../01-lazyload/pages/Lazypage3"));
export const routes:Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayput,
    name: "Lazy-dashboard",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   Component: Lazy3,
  //   name: "Lazy-3",
  // },
];
