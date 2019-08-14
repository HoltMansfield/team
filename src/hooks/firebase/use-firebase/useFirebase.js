import { useContext } from 'react'
import { FirebaseContext } from 'components/core/firebase/FirebaseProvider'


export const useFirebase = () => {
  const x = useContext(FirebaseContext)
  const { app, auth, db } = x || {}

  return {
    app, auth, db
  }
}
