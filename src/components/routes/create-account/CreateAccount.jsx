/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useEffect } from 'react'
import Flex from 'flexbox-react'
import { useFirebaseUserAdmin } from 'hooks/firebase/use-firebase-user-admin/useFirebaseUserAdmin'
import { useRouteState } from 'hooks/core/use-route-state/useRouteState'
import { CreateAccountForm } from './create-account-form/CreateAccountForm'
// import { useCreateAccountLogic } from './useCreateAccountLogic'
// import { } from './styled'


export default function CreateAccount () {
  const { setRouteState } = useRouteState()
  // const { someValue } = useCreateAccountLogic()
  const { createUser } = useFirebaseUserAdmin()

  useEffect(() => {
    setRouteState({})
    //createUser('holtmansfieldGOLDIE@gmail.com','pmpn8ez')
  },[])

  return (
    <Flex flexDirection="column" flexGrow={1}>
      <CreateAccountForm />
    </Flex>
  )
}
