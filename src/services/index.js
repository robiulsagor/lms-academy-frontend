import axiosInstance from "@/utils/axios"

export const uploadMedia = async (formData) => {
    const { data } = await axiosInstance.post("/api/media/upload-media", formData)
    return data
}