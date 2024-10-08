import MediaProgressBar from "@/components/media-progress-bar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InstructorContext } from "@/context/instructor-context"
import { uploadMedia } from "@/services"
import { useContext } from "react"

const CourseSettings = () => {
    const { courseLandingFormData, setCourseLandingFormData, mediaUploadProgress, setMediaUploadProgress, mediaUploadProgressPercentage, setMediaUploadProgressPercentage } = useContext(InstructorContext)

    const handleImageUpload = async (e) => {
        const selectedFile = e.target.files[0]

        if (selectedFile) {
            const imageFormData = new FormData()
            imageFormData.append("file", selectedFile)

            try {
                setMediaUploadProgress(true)
                const res = await uploadMedia(imageFormData, setMediaUploadProgressPercentage)
                if (res.success) {
                    setCourseLandingFormData({
                        ...courseLandingFormData,
                        image: res.result.url
                    })
                    setMediaUploadProgress(false)
                }
            } catch (error) {
                console.log(error);
            }

        }
    }


    return <Card>
        <CardHeader className="text-xl font-bold">
            <h2>Course Settings</h2>
        </CardHeader>
        <CardContent className="space-y-2">

            {mediaUploadProgress && <MediaProgressBar isUploading={mediaUploadProgress} progress={mediaUploadProgressPercentage} />}

            {courseLandingFormData.image && <h2 className="text-lg font-bold">Course Image</h2>}
            {
                courseLandingFormData.image ? (
                    <div className="relative w-full h-72">
                        <img src={courseLandingFormData.image} alt="course-image" className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <>
                        <Label htmlFor="courseImg" >Upload Course Image</Label>
                        <Input type="file" accept="image/*" id="courseImg" onChange={(e) => handleImageUpload(e)} />
                    </>
                )
            }

        </CardContent>
    </Card>
}

export default CourseSettings