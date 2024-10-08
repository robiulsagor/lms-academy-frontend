import InstructorDashboard from "@/components/instructor-view"
import InstructorCourses from "@/components/instructor-view/courses"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AuthContext } from "@/context/auth-context"
import axiosInstance from "@/utils/axios"
import { BarChart, Book, LogOut } from "lucide-react"
import { useContext, useState } from "react"
import { toast } from "react-toastify"

const menuItems = [
    {
        icon: BarChart,
        label: "Dashboard",
        value: "dashboard",
        component: <InstructorDashboard />
    },
    {
        icon: Book,
        label: "Courses",
        value: "courses",
        component: <InstructorCourses />
    },
    {
        icon: LogOut,
        label: "Logout",
        value: "logout",
        component: null
    },
]

const InstructorDashboardPage = () => {
    const { setAuth } = useContext(AuthContext)
    const [activeTab, setActiveTab] = useState('dashboard')

    const handleLogout = async () => {
        try {
            const res = await axiosInstance.get('/api/auth/logout', { withCredentials: true })
            console.log(res.data);
            if (res.data.success) {
                setAuth({
                    authenticated: false,
                    user: null
                })
                toast.success("User logged Out")
            }

        } catch (error) {
            console.log(error.message);

        }
    }

    return (
        <div className="bg-gray-100 flex  min-h-screen">
            <aside className="w-64 bg-white hidden md:block h-screen">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Instructor View</h2>
                    <nav>
                        {
                            menuItems.map(item => (
                                <Button className="w-full mb-2 justify-start" key={item.name}
                                    onClick={item.value === 'logout' ? handleLogout : () => setActiveTab(item.value)}>
                                    <item.icon className="w-5 h-5 mr-4" />
                                    {item.label}
                                </Button>
                            ))
                        }
                    </nav>
                </div>
            </aside>
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Dashboard
                    </h2>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        {
                            menuItems.map(menuItem => (
                                <TabsContent key={menuItem.value} value={menuItem.value}>
                                    {
                                        menuItem.component !== null ? menuItem.component : null
                                    }
                                </TabsContent>
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default InstructorDashboardPage