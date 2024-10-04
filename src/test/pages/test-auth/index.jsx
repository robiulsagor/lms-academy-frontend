import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signinFormControls, signupFormControls } from "@/test/config"
import { TestAuthContext } from "@/test/test-auth-context"
import CommonForm from "@/test/test-components/common-form"
import { GraduationCap } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

const TestAuthPage = () => {
    const { signinData, setSigninData, signupData, setSignupData, handleLogin, handleRegister } = useContext(TestAuthContext)

    return (
        <div>
            <header className="px-6 lg:px-8 h-14 bg-slate-100 flex items-center border-b border-b-gray-300">
                <Link to="/" className="flex items-center">
                    <GraduationCap className="w-10 h-10 mr-5" />
                    <span className="text-xl text-gray-800 font-bold">Test LMS Academy </span>
                </Link>
            </header>

            <div className="flex items-center justify-center h-[calc(100vh-56px)]">
                <Tabs defaultValue="signin" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Sign In
                                </CardTitle>
                                <CardDescription>
                                    Sign in with email and password
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CommonForm formControls={signinFormControls} formData={signinData} setFormData={setSigninData} btnText="Login" onSubmit={handleLogin}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Sign Up
                                </CardTitle>
                                <CardDescription>
                                    Get started with your credentials
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CommonForm formControls={signupFormControls} formData={signupData} setFormData={setSignupData} btnText="Sign Up" onSubmit={handleRegister}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default TestAuthPage