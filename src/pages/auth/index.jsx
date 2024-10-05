import CommonForm from "@/components/common-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signinFormControls, signupFormControls } from "@/config"
import { AuthContext } from "@/context/auth-context"
import { GraduationCap } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const AuthPage = () => {
    const { signinFormData, setSigninFormData, signupFormData, setSignupFormData, handleLogin, handleRegister } = useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [activeTab, setActiveTab] = useState('signin')

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    const checkIfSigninBtnDisabled = () => {
        return signinFormData && signinFormData.email !== "" && signinFormData.password !== ""
    }

    const checkIfSignupBtnDisabled = () => {
        return signupFormData && signupFormData.email !== "" && signupFormData.password !== ""
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-slate-50 border-b h-14 px-4 lg:px-6 flex items-center">
                <Link to={'/'} className="flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 mr-4" />
                    <span className="text-xl font-extrabold">LMS Academy</span>
                </Link>

                <Link to="/test" className="text-2xl ml-auto mr-10 font-bold"> Test</Link>

            </header>

            <div className="flex items-center justify-center h-[calc(100vh-100px)] ">
                <Tabs defaultValue="signin" onValueChange={handleTabChange} className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup" >Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-gray-600">
                                    Sign In to your account
                                </CardTitle>
                                <CardDescription>
                                    Enter your email and password to login
                                </CardDescription>
                            </CardHeader>
                            <CardContent >
                                <CommonForm formControls={signinFormControls} formData={signinFormData} setFormData={setSigninFormData} btnText="Login" onSubmit={handleLogin}
                                    isDisabled={checkIfSigninBtnDisabled} />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-gray-600 text-2xl font-bold">
                                    Create a new account
                                </CardTitle>
                                <CardDescription>
                                    Enter your username, email, and password and to get Started
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CommonForm formControls={signupFormControls} formData={signupFormData} setFormData={setSignupFormData} btnText="Sign Up" onSubmit={handleRegister}
                                    isDisabled={checkIfSignupBtnDisabled}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AuthPage