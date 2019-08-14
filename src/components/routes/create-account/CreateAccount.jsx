/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useEffect } from 'react'
import { useFirebaseUserAdmin } from 'hooks/firebase/use-firebase-user-admin/useFirebaseUserAdmin'
import { useRouteState } from 'hooks/core/use-route-state/useRouteState'
import { FullPageForm } from 'components'
import { CreateAccountForm } from './create-account-form/CreateAccountForm'


export default function CreateAccount () {
  const { setRouteState } = useRouteState()
  const { createUser } = useFirebaseUserAdmin()

  useEffect(() => {
    setRouteState({})
  },[])

  const onSubmit = (newUserData) => {
    createUser(newUserData.email, newUserData.password)
  }

  return (
    <FullPageForm>
      <CreateAccountForm onSubmit={onSubmit} />
    </FullPageForm>
  )
}
