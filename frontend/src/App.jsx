import { Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup/Signup"
import Signin from "./pages/Signin/Signin"
import Send from "./pages/Send/Send"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {

  return (
    <Routes>
      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/signin" element={<Signin></Signin>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      <Route path="/send" element={<Send></Send>} />
    </Routes>
  )
}

export default App
