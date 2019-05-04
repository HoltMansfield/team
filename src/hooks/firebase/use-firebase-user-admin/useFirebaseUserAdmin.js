import { useFirebase } from '../use-firebase/useFirebase'
import { useHandleError } from 'hooks/core/use-handle-error/useHandleError'

export const useFirebaseUserAdmin = () => {
  const { app, auth, db } = useFirebase()
  const { handleGenericCritical } = useHandleError()

  const createUser = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password)
      debugger
      return result
    } catch (error) {
      debugger
      const data = { origin: 'useFirebaseUserAdmin.createUser', email }
      handleGenericCritical({ data, error })
    }
  }

  return {
    createUser
  }
}
