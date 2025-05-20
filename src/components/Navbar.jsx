import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from '../pages/About'

export default function Navbar() {
  const navgate = useNavigate();
  const login = true ;
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to={"/home"} className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
     <Link to={"/About"}className='nav-link'>About</Link>
        </li>
        <li className="nav-item">
        <Link to={"/Contact"}className='nav-link'>Contact</Link>
        </li>
        <li className="nav-item">
  
        </li>
      </ul>
    </div>
    {login== true ?     <div className='flex mx-auto gap-3'>
<button onClick={()=>{navgate("/SignUp")}} className='btn btn-primary mx-3'>SignUp </button>
<button onClick={()=>{navgate("/")}} className='btn btn-success mx-3'>SignIn </button>
</div>:<button onClick={()=>{navgate("/")}} className='btn btn-danger mx-3'>Logout </button>}
   


  </div>
</nav>
    </div>
  )
}

