import FormControls from "@/components/common-form/form-controls"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { createCorseLandingPageFormControls } from "@/config"
import { InstructorContext } from "@/context/instructor-context"
import { useContext } from "react"

const CourseLandingPage = () => {
    const { courseLandingFormData, setCourseLandingFormData } = useContext(InstructorContext)
    return <div>
        <Card>
            <CardHeader className="text-xl font-bold">
                Course Landing Page
            </CardHeader>
            <CardContent>
                <FormControls
                    formControls={createCorseLandingPageFormControls}
                    formData={courseLandingFormData}
                    setFormData={setCourseLandingFormData}
                />
            </CardContent>
        </Card>
    </div>
}

export default CourseLandingPage