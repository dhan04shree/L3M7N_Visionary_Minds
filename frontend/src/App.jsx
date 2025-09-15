
import './App.css'
import Dashboard from "./components/Dashboard"
import Login from './components/LoginForm'
import Navbar from './components/Navbar'
import Registration from './components/Registration'
import {Route,Routes} from "react-router-dom"
function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
