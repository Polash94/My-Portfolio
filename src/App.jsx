import react, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Links from './Components/Links'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Experience from './Components/Experience'
import Contact from './Components/Contact'


function App() {

  //scroll
  const about = useRef(null);
const portfolio = useRef(null);
const experience = useRef(null);
const contact = useRef(null);

const ScrollToSection = (ref) => {
  console.log(ref)
    
  // window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: 'smooth'
  // })
}


  return (
   <div className='h-screen bg-gradient-to-b from-black to-gray-700'>
    <Navbar ScrollToSection ={ ScrollToSection }></Navbar>
    <Links></Links>
    <Hero></Hero>
    
    <About></About>
    <Portfolio></Portfolio>
    <Experience experience = { experience } ></Experience>
    <Contact></Contact>

  
  


   </div>
  )
}

export default App
