import './App.css'
import Reg from "./components/Registration/Reg";
import Log from './components/Login/Log';
import Offer from './maincomponents/offerride/Offer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from './dashboardpage/Land'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/login"element={<Log/>}/>
        <Route path="/offerpage"element={<Offer/>}/>
      </Routes>
      
    </>
  )
}
export default App
