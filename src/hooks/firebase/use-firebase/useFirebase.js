import { useContext } from 'react'
import { FirebaseContext } from 'components/core/firebase/FirebaseProvider'


export const useFirebase = () => {
  const { app, auth, db } = useContext(FirebaseContext)

  return {
    app, auth, db
  }
}
