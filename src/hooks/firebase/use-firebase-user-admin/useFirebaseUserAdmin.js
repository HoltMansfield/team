import { useFirebase } from 'hooks/firebase/use-firebase/useFirebase'
import { useHandleError } from 'hooks/core/use-handle-error/useHandleError'


export const useFirebaseUserAdmin = () => {
  const { auth, db } = useFirebase()
  const { handleGenericCritical } = useHandleError()

  const createUserProfile = async (createUserResult) => {
    try {
      const profile = {
        createdIn: 'Web App'
      }
      await db.collection('userProfile')
              .doc(createUserResult.uid)
              .set(profile)

      return profile
    } catch (error) {
      debugger
      const data = { origin: 'useFirebaseUserAdmin.createUserProfile', createUserResult }
      handleGenericCritical({ data, error })
    }
  }

  const createUser = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password)
      const profile = await createUserProfile(result.user)
      debugger
      return { user: result.user, profile }
    } catch (error) {
      debugger
      const data = { origin: 'useFirebaseUserAdmin.createUser', email }
      handleGenericCritical({ data, error })
    }
  }

  const login = async (loginAttempt) => {
    try {
      const result = await auth.signInWithEmailAndPassword(loginAttempt.email, loginAttempt.password)
      debugger
      return result
    } catch (error) {
      debugger
      const data = { origin: 'useFirebaseUserAdmin.login', loginAttempt }
      handleGenericCritical({ data, error })
    }
  }

  return {
    createUser,
    login
  }
}
