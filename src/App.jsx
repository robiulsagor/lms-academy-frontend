import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Test from "./pages/auth/test";
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardPage from "./pages/instructor";
import CommonLayout from "./components/student-view/common-layout";
import StudentHomepage from "./pages/student/home";

function App() {
  const { auth } = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticated}
              user={auth?.user}
            />}
        />

        <Route path='/instructor'
          element={<RouteGuard
            element={<InstructorDashboardPage />}
            authenticated={auth?.authenticated}
            user={auth?.user}
          />
          }
        />

        <Route path="/"
          element={
            <RouteGuard
              element={<CommonLayout />
              }
              authenticated={auth?.authenticated}
              user={auth?.user}
            />
          }>
          <Route path="" element={<StudentHomepage />} />
          <Route path="home" element={<StudentHomepage />} />
        </Route>

        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </>
  )
}

export default App
