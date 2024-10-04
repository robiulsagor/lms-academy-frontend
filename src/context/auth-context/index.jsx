import { initialSigninData, initialSignupData } from '@/config'
import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [signinFormData, setSigninFormData] = useState(initialSigninData)
    const [signupFormData, setSignupFormData] = useState(initialSignupData)

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Sign In");
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log("Sign UP");

    }

    const value = { signinFormData, setSigninFormData, signupFormData, setSignupFormData, handleLogin, handleRegister }

    return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>
}

export default AuthProvider