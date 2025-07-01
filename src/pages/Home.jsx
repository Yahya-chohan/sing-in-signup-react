import React from 'react'
import '../Styles/pages.css'

export default function Home() {
  return (
    <div className='mainhome'>
      <div className='mainhome'>
        <h4 className="text- text-center pt-5">Welcome to Our Platform</h4>
       <p className='text-4xl md:text-6xl font-bold mb-4 text-center text-'>  Building fast, secure, and beautiful web experiences <br />with modern technologies.</p>
       <div className="d-flex justify-content-center pb-4 pt-4  " >
 <button className='btn btn-success mx-3 m-auto'>Get Started</button>
       </div>
     </div>
     <div className='bg-dark'>

<h5 className="section- text-light text-center pt-5" >Our Core Features</h5>

<div className="card-container">
  <div className="custom-card">
    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket h-12 w-12 mx-auto text-orange-400 mb-4" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></h5>
    <h6 className="card-subtitle">Fast Performance </h6>
    <p className="card-text">
     Optimized for blazing speed with modern frontend tools.
    </p>
  </div>

  <div className="custom-card">
    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-12 w-12 mx-auto text-green-400 mb-4" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></h5>
    <h6 className="card-subtitle">Secure & Reliable</h6>
    <p className="card-text">
     We ensure data safety with best security practices
    </p>
  </div>
  <div className="custom-card">
    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone h-12 w-12 mx-auto text-blue-400 mb-4" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg></h5>
    <h6 className="card-subtitle">Mobile Friendly</h6>
    <p className="card-text">
    Fully responsive design that works on any device.
    </p>
  </div>


</div >

     </div>

<div className='lastsection '>
<h3 className='finalh3' >Ready to get started?</h3>
<p className='finaltext'> Join us now and take your website to the next level.</p>
  <button className=' btn btn-light mx-3 m-auto'>Get Started</button>
</div>




    </div>
  )
}
