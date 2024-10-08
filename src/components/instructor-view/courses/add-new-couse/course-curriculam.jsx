import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { courseCurriculamInitialFormData } from "@/config"
import { InstructorContext } from "@/context/instructor-context"
import { useContext } from "react"

const CourseCurriculam = () => {

    const { courseCurriculamFormData, setCourseCurriculamFormData } = useContext(InstructorContext)

    const handleAddLecture = () => {
        setCourseCurriculamFormData([
            ...courseCurriculamFormData, { ...courseCurriculamInitialFormData }
        ])
    }

    return (
        <Card>
            <CardHeader className="capitalize font-bold text-xl">
                Course curriculam
            </CardHeader>
            <CardContent>
                <Button onClick={handleAddLecture}>Add Lecture</Button>

                <div className="space-y-3 mt-5">
                    {courseCurriculamFormData.map((curriculam, index) => (
                        <div key={index} className="border p-5 rounded">
                            <div className="flex gap-5 items-center">
                                <h3>Lecture {index + 1} </h3>
                                <Input
                                    type="text"
                                    placeholder="Lecture Title"
                                    name={`lecture-${index + 1}`}
                                    className="max-w-96"
                                />

                                <div className="flex items-center gap-3">
                                    <Switch
                                        checked={true}
                                        id={`freePreview-{index+1}`}
                                    />
                                    <Label id={`freePreview-{index+1}`}>Free Preview </Label>
                                </div>

                            </div>
                            <div className="mt-5 mb-3">
                                <Input type="file" accept="video/*" />
                            </div>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card>
    )
}

export default CourseCurriculam