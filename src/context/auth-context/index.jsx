import { Skeleton } from '@/components/ui/skeleton'
import { initialSigninData, initialSignupData } from '@/config'
import axiosInstance from '@/utils/axios'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [signinFormData, setSigninFormData] = useState(initialSigninData)
    const [signupFormData, setSignupFormData] = useState(initialSignupData)
    const [loading, setLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(true)
    const [auth, setAuth] = useState({
        authenticated: false,
        user: null
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            try {
                const { data } = await axiosInstance.post('http://localhost:5000/api/auth/login', signinFormData, { withCredentials: true })
                if (data.success) {
                    toast.success(data.message)
                    setSigninFormData(initialSigninData)
                    setAuth({
                        authenticated: true,
                        user: data.data.user
                    })
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong")
            } finally {
                setLoading(false)
            }
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
                setSignupFormData(initialSignupData)
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

    const checkAuth = async () => {
        setPageLoading(true)
        try {
            const res = await axiosInstance.get("/api/auth/check-auth", { withCredentials: true })
            if (res.data.success) {
                setAuth({
                    authenticated: true,
                    user: res.data.data.user
                })
                setPageLoading(false)
            } else {
                setAuth({
                    authenticated: false,
                    user: null
                })
                setPageLoading(false)

            }
        } catch (error) {
            console.log(error?.response?.data?.message || error?.message);
            setPageLoading(false)
            setAuth({
                authenticated: false,
                user: null
            })
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])



    const value = { signinFormData, setSigninFormData, signupFormData, setSignupFormData, handleLogin, handleRegister, loading, auth, setAuth }

    return <AuthContext.Provider value={value}>{pageLoading ? <Skeleton /> : children} </AuthContext.Provider>
}

export default AuthProvider