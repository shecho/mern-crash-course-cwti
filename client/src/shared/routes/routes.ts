/* eslint-disable import/no-unresolved */
import { lazy } from 'react'

type JSXComponent = () => JSX.Element

export interface IRoute {
  to: string
  path: string
  Component: any
  name: string
}

const HomePage = lazy(() => import('../../pages/home'))

export const ROUTES: IRoute[] = [
  {
    to: '/home',
    path: 'home',
    Component: HomePage,
    name: 'home',
  },
]
export default ROUTES
