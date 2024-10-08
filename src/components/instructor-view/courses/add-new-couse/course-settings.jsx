import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CourseSettings = () => {
    return <Card>
        <CardHeader className="text-xl font-bold">
            <h2>Course Settings</h2>
        </CardHeader>
        <CardContent className="space-y-2">
            <Label htmlFor="courseImg" >Upload Course Image</Label>

            <Input type="file" accept="image/*" id="courseImg" />
        </CardContent>
    </Card>
}

export default CourseSettings