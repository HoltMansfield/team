import React, { useEffect } from 'react'
import { useRouteState } from 'hooks/core/use-route-state/useRouteState'
import { useFirebaseUserAdmin } from 'hooks/firebase/use-firebase-user-admin/useFirebaseUserAdmin'
import { FullPageForm } from 'components'
import { LoginForm } from './login-form/LoginForm'


export default function Login () {
  const { setRouteState } = useRouteState()
  const { login } = useFirebaseUserAdmin()

  useEffect(() => {
    // set or clear all state for this route here (we need to clear it even if we're not using it)
    setRouteState({})
  },[])

  const onSubmit = (loginAttempt) => {
    login(loginAttempt)
  }

  return (
    <FullPageForm>
      <LoginForm onSubmit={onSubmit} />
    </FullPageForm>
  )
}
