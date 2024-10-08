import MediaProgressBar from "@/components/media-progress-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { courseCurriculamInitialFormData } from "@/config"
import { InstructorContext } from "@/context/instructor-context"
import { uploadMedia } from "@/services"
import { Cross1Icon } from "@radix-ui/react-icons"
import { useContext } from "react"

const CourseCurriculam = () => {

    const { courseCurriculamFormData, setCourseCurriculamFormData, mediaUploadProgress, setMediaUploadProgress, mediaUploadProgressPercentage, setMediaUploadProgressPercentage } = useContext(InstructorContext)

    const handleAddLecture = () => {
        setCourseCurriculamFormData([
            ...courseCurriculamFormData, { ...courseCurriculamInitialFormData[0] }
        ])
    }

    const handleRemoveLecture = (index) => {
        const updatedLectures = courseCurriculamFormData.filter((_, i) => i !== index)
        setCourseCurriculamFormData(updatedLectures)
    }

    const handleCourseTitle = (e, index) => {
        let cpyCourseCurriculamFormData = [...courseCurriculamFormData]

        cpyCourseCurriculamFormData[index] = {
            ...cpyCourseCurriculamFormData[index],
            title: e.target.value
        }
        setCourseCurriculamFormData(cpyCourseCurriculamFormData)
    }

    const handleCourseFreePreview = (val, index) => {
        let cpyCourseCurriculamFormData = [...courseCurriculamFormData]
        cpyCourseCurriculamFormData[index] = {
            ...cpyCourseCurriculamFormData[index],
            free_preview: val
        }
        setCourseCurriculamFormData(cpyCourseCurriculamFormData)
    }

    const handleMediaUpload = async (e, index) => {
        const selectedFile = e.target.files[0]

        if (selectedFile) {
            const videoFormData = new FormData()
            videoFormData.append("file", selectedFile)

            try {
                setMediaUploadProgress(true)
                const res = await uploadMedia(videoFormData, setMediaUploadProgressPercentage)
                if (res.success) {

                    let cpyCourseCurriculamFormData = [...courseCurriculamFormData]
                    cpyCourseCurriculamFormData[index] = {
                        ...cpyCourseCurriculamFormData[index],
                        video_url: res.result.secure_url,
                        public_id: res.result.public_id
                    }
                    setCourseCurriculamFormData(cpyCourseCurriculamFormData)
                    setMediaUploadProgress(false)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }



    return (
        <Card>
            <CardHeader className="capitalize font-bold text-xl">
                Course curriculam
            </CardHeader>
            <CardContent>
                <Button onClick={handleAddLecture}>Add Lecture</Button>

                {
                    mediaUploadProgress &&
                    <MediaProgressBar isUploading={mediaUploadProgress} progress={mediaUploadProgressPercentage} />
                }

                <div className="space-y-3 mt-5">
                    {courseCurriculamFormData.map((curriculam, index) => (
                        <div key={index} className="border p-5 rounded relative">

                            {/* if this is the last lecture then show the remove button */}
                            {courseCurriculamFormData.length > 1 && index + 1 === courseCurriculamFormData.length && (
                                <Button variant="ghost" className="absolute top-1 right-1" onClick={() => handleRemoveLecture(index)}>
                                    <Cross1Icon />
                                </Button>
                            )}

                            <div className="flex flex-col md:flex-row justify-start gap-5 items-start md:items-center">
                                <h3>Lecture {index + 1} </h3>
                                <Input
                                    type="text"
                                    placeholder="Lecture Title"
                                    name={`lecture-${index + 1}`}
                                    className="w-full md:max-w-96"
                                    onChange={(e) => handleCourseTitle(e, index)}
                                    value={courseCurriculamFormData[index]?.title}
                                />

                                <div className="flex items-center gap-3">
                                    <Switch
                                        checked={courseCurriculamFormData[index]?.freePreview}
                                        onCheckedChange={(val) => handleCourseFreePreview(val, index)}
                                        id={`freePreview-{index+1}`}
                                    />
                                    <Label id={`freePreview-{index+1}`}>Free Preview </Label>
                                </div>

                            </div>
                            <div className="mt-5 mb-3">
                                <Input type="file" accept="video/*" onChange={(e) => handleMediaUpload(e, index)} />
                            </div>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card>
    )
}

export default CourseCurriculam