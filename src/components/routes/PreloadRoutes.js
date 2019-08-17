/* eslint no-unused-vars: "off" */
import Loadable from 'react-loadable'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
const CreateAccount = Loadable({ loader: () => import('./create-account/CreateAccount'), loading: RouteLoading })
const Login = Loadable({ loader: () => import('./login/Login'), loading: RouteLoading })
const ForgotPassword = Loadable({ loader: () => import('./forgot-password/ForgotPassword'), loading: RouteLoading })
const ChangePassword = Loadable({ loader: () => import('./change-password/ChangePassword'), loading: RouteLoading })
//GeneratorToken: <next-import>

export const preloadAllRoutes = () => {
  // preload all routes 2 seconds after the react app is rendered
  setTimeout(() => {
    CreateAccount.preload()
    Login.preload()
    ForgotPassword.preload()
    ChangePassword.preload()
    //GeneratorToken: <next-preload>
  }, 2000)
}
