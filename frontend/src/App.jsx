import { Routes,Route } from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {SendMoney} from "./pages/SendMoney"
import {Dashboard} from "./pages/Dashboard"

function App() {

  return (
    <Routes>
      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/signin" element={<Signin></Signin>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      <Route path="/send" element={<SendMoney></SendMoney>} />
    </Routes>
  )
}

export default App
