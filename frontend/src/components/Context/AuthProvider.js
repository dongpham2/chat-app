import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const AuthContext = React.createContext()



export default function AuthProvider({children}) {

    const [user, setUser] = useState({})
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true)
    
React.useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {
        if(user) {
            const {displayName, email, uid, photoURL} = user;
            setUser({displayName, email, uid, photoURL})
            setIsLoading(false)
            history.push('/')
        }
        history.push('/login')
        
      }) 
    // Clean function
    return () => {
        unsubcribed()
    }
}, [history])
  return (
    <AuthContext.Provider value={{user}}>
        {!isLoading ? <Spin/> : children}
    </AuthContext.Provider>
  )
}
