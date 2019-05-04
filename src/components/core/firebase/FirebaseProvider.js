/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useState, useEffect } from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { getConfig } from 'config/secure'


const FirebaseContext = React.createContext(null)

function FirebaseProvider ({ children }) {
  const [firebase, setFirebase] = useState(null)
  const {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  } = getConfig()
  const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  }

  useEffect(() => {
    app.initializeApp(firebaseConfig)
    const auth = app.auth()
    const db = app.database()
    setFirebase({ app, auth, db })
  },[])

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider, FirebaseContext }
