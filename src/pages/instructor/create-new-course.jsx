import CourseCurriculam from "@/components/instructor-view/courses/add-new-couse/course-curriculam"
import CourseLandingPage from "@/components/instructor-view/courses/add-new-couse/course-landing-page"
import CourseSettings from "@/components/instructor-view/courses/add-new-couse/course-settings"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CreateNewCoursePage = () => {
  return (
    <div className="container p-4 lg:px-10 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Create a new course</h1>
        <Button className="px-8 text-sm tracking-wider">SUBMIT</Button>
      </div>

      <Card className="mt-5">
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculam" className="space-y-4">
              <TabsList >
                <TabsTrigger value="curriculam">Curriculam</TabsTrigger>
                <TabsTrigger value="course-landing-page">Course Landing Page</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculam">
                <CourseCurriculam />
              </TabsContent>

              <TabsContent value="course-landing-page">
                <CourseLandingPage />
              </TabsContent>

              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateNewCoursePage