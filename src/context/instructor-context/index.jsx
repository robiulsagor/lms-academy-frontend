/* eslint-disable react/prop-types */
import { courseCurriculamInitialFormData, courseLandingInitialFormData } from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null)

const InstructorProvider = ({ children }) => {
    const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingInitialFormData)
    const [courseCurriculamFormData, setCourseCurriculamFormData] = useState(courseCurriculamInitialFormData)

    return <InstructorContext.Provider value={{ courseLandingFormData, setCourseLandingFormData, courseCurriculamFormData, setCourseCurriculamFormData }}>{children} </InstructorContext.Provider>
}

export default InstructorProvider