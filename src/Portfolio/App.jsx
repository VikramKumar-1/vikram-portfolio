import { Routes,Route } from "react-router";
import Home from'./Pages/Home'
import About from'./Pages/About'
import Skills from'./Pages/Skills'
import Contact from'./Pages/Contact'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'

export default function App(){

      return (
        <>
          <NavBar/>
          
         

         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about"element={<About/>}/>
            <Route path="/skills"element={<Skills/>}/>
            <Route path="/contact"element={<Contact/>}/>
            
        </Routes>
        <Footer/>
        </>
      )
}