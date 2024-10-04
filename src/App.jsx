import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
