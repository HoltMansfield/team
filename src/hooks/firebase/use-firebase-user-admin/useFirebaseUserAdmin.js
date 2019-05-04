import { useFirebase } from '../use-firebase/useFirebase'


export const useFirebaseUserAdmin = () => {
  const { app, auth, db } = useFirebase()

  const createUser = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password)
      debugger
      return result
    } catch (e) {
      debugger
    }
  }

  return {
    createUser
  }
}
