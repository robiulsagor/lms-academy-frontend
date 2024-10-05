/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const RouteGuard = ({ authenticated, user, element }) => {
    const location = useLocation()

    if (!authenticated && !location.pathname.includes('/auth')) {
        return <Navigate to="/auth" replace={true} />
    }

    if (authenticated && user?.role !== 'instructor' &&
        (location.pathname.includes('/instructor') || location.pathname.includes('/auth'))) {
        return <Navigate to={'/home'} />
    }

    if (authenticated && user?.role === "instructor" && !location.pathname.includes("/instructor")) {
        return <Navigate to={'/instructor'} />
    }

    return <Fragment>{element}</Fragment>
}

export default RouteGuard