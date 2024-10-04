import { createContext, useState } from "react";
import { signinInitialData, signupInitialData } from "../config";

export const TestAuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const TestAuthProvider = ({ children }) => {
    const [signinData, setSigninData] = useState(signinInitialData)
    const [signupData, setSignupData] = useState(signupInitialData)

    const handleLogin = (e) => {
        e.preventDefault()
        alert("Logging In")
    }

    const handleRegister = (e) => {
        e.preventDefault()
        alert("Logging In")
    }

    const value = { signinData, setSigninData, signupData, setSignupData, handleLogin, handleRegister }

    return <TestAuthContext.Provider value={value}>{children} </TestAuthContext.Provider>
}

export default TestAuthProvider