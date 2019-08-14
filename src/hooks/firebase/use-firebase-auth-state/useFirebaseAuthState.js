import { useEffect } from 'react'
import { useFirebase } from 'hooks/firebase/use-firebase/useFirebase'
import { useLoggedInUser } from 'hooks/redux/foundation/use-logged-in-user/useLoggedInUser'


export const useFirebaseAuthState = () => {
  const { auth } = useFirebase()
  const { setLoggedInUser } = useLoggedInUser()

  const wireUpAuthStateListener = () => {
    if (!auth) {
      return
    }
    
    auth.onAuthStateChanged(authUser => {
      setLoggedInUser(authUser)
    })
  }

  useEffect(() => {
    wireUpAuthStateListener()
  }, [auth])

  const loadAuthState = () => {

  }

  return {
    loadAuthState
  }
}
