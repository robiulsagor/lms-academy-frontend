import axiosInstance from "@/utils/axios"

export const uploadMedia = async (formData, onUploadProgress) => {
    const { data } = await axiosInstance.post("/api/media/upload-media", formData, {
        onUploadProgress: (progressEvent) => {
            const totalLength = progressEvent.lengthComputable
                ? progressEvent.total
                : progressEvent.target.getResponseHeader('content-length') ||
                progressEvent.target.getResponseHeader('x-decompressed-content-length');

            if (totalLength) {
                const progress = Math.round((progressEvent.loaded * 100) / totalLength);
                onUploadProgress(progress); // Pass progress to the callback
            }
        }
    });
    return data
}