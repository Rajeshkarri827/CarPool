import './App.css'
import Reg from "./components/Registration/Reg";
import Log from './components/Login/Log';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from './landingpage/Land'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/login"element={<Log/>}/>
      </Routes>
      
    </>
  )
}

export default App
