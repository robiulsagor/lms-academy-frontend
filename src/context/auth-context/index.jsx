import { initialSigninData, initialSignupData } from '@/config'
import axiosInstance from '@/utils/axios'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [signinFormData, setSigninFormData] = useState(initialSigninData)
    const [signupFormData, setSignupFormData] = useState(initialSignupData)
    const [loading, setLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            console.log("Sign In");
        } catch (error) {
            console.log(error);

        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axiosInstance.post('http://localhost:5000/api/auth/register', {
                ...signupFormData, role: "user"
            })
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }

    }

    const value = { signinFormData, setSigninFormData, signupFormData, setSignupFormData, handleLogin, handleRegister, loading }

    return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>
}

export default AuthProvider