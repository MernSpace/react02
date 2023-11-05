import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import AboutPage from "./assets/pages/AboutPage"
import '../src/assets/css/nav.css'
import BlogPage from "./assets/pages/BlogPage"
import ContactPage from "./assets/pages/ContactPage"
import ProjectPage from "./assets/pages/ProjectPage"
import ServicePage from "./assets/pages/ServicePage"
import '../src/assets/css/mainstyle.css'



function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/project" element={<ProjectPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
