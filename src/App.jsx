import { useState } from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element= {<SignIn/>}/>
<Route path='/SignUp' element= {<SignUp/>}/>
<Route path='/home' element= {<Home/>}/>
<Route path='/about' element= {<About/>} />
<Route path='/contact' element= {<Contact/>} />
<Route path='*' element= {<h1>404</h1>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
