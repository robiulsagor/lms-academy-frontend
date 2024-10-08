import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const InstructorCourses = () => {
    const navigate = useNavigate()

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center ">
                <CardTitle className="text-3xl font-bold text-gray-800">All Courses</CardTitle>
                <Button onClick={() => navigate('create-new-course')}>Create New Course</Button>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto mt-5">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Course</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">ReactJS Full Course</TableCell>
                                <TableCell>115</TableCell>
                                <TableCell>$1000</TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm" variant="ghost" className="hover:bg-green-500  hover:text-white mr-1"><Pencil size="18" /> </Button>
                                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-white hover:bg-red-500  transition"><Trash2Icon size="18" /> </Button>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">NextJS Full Course</TableCell>
                                <TableCell>85</TableCell>
                                <TableCell>$1200</TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm" variant="ghost" className="hover:bg-green-500  hover:text-white mr-1"><Pencil size="18" /> </Button>
                                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-white hover:bg-red-500  transition"><Trash2Icon size="18" /> </Button>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">nodeJS Full Course</TableCell>
                                <TableCell>68</TableCell>
                                <TableCell>$1200</TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm" variant="ghost" className="hover:bg-green-500 hover:text-white mr-1"><Pencil size="18" /> </Button>
                                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-white hover:bg-red-500  transition"><Trash2Icon size="18" /> </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </CardContent>
        </Card>
    )
}

export default InstructorCourses