import { Outlet } from "react-router-dom"

const CommonLayout = () => {
    return (
        <div>CommonLayout
            <Outlet />
        </div>
    )
}

export default CommonLayout