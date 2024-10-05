import axiosInstance from "@/utils/axios";
import { toast } from "react-toastify";

const Test = () => {
    const getCookie = async () => {
        try {
            const res = await axiosInstance.get("/api/auth/check-auth", { withCredentials: true })
            console.log(res.data)
            toast.info(res.data)
        } catch (error) {
            console.log(error);

        }
    }

    const setCookie = async () => {
        try {
            const res = await axiosInstance.post('/api/cookie/set', {}, { withCredentials: true });
            console.log(res.data)
            toast.info(res.data)
        } catch (error) {
            console.log(error);

        }
    }

    const testAuth = async () => {
        try {
            const res = await axiosInstance.get('/api/auth/check-auth', { withCredentials: true });
            console.log(res.data)
            toast.info(res.data)
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className="flex items-center justify-center h-screen">

            <div className="w-[500px] h-[100px] border border-gray-400 rounded flex items-center justify-center gap-4">
                <button onClick={getCookie}
                    className="px-5 py-2 font-semibold rounded text-lg border hover:bg-slate-800 hover:text-slate-200 transition"> Get </button>
                <button onClick={setCookie}
                    className="px-5 py-2 font-semibold rounded text-lg border hover:bg-slate-800 hover:text-slate-200 transition"> Set </button>
                <button onClick={testAuth}
                    className="px-5 py-2 font-semibold rounded text-lg border hover:bg-slate-800 hover:text-slate-200 transition"> Check Auth </button>
            </div>
        </div>
    )
}

export default Test