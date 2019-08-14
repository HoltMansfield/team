import React, { useEffect } from 'react'
import { useRouteState } from 'hooks/core/use-route-state/useRouteState'
import { useFirebaseUserAdmin } from 'hooks/firebase/use-firebase-user-admin/useFirebaseUserAdmin'
import { useLoginLogic } from './useLoginLogic'
import { LoginForm } from './login-form/LoginForm'
// import { } from './styled'


export default function Login () {
  const { routeState, setRouteState } = useRouteState()
  const { someValue } = useLoginLogic()
  const { login } = useFirebaseUserAdmin()

  useEffect(() => {
    // set or clear all state for this route here (we need to clear it even if we're not using it)
    setRouteState({})
  },[])

  const onSubmit = (loginAttempt) => {
    login(loginAttempt)
  }

  return (
    <LoginForm onSubmit={onSubmit} />
  )
}
