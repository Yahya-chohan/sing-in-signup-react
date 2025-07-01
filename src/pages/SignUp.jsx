import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from '../pages/About'

export default function SignUp() {
   const navgate = useNavigate();
  return (
    <div>   
          <form style={{width:"400px "  }} className='mx-auto border border-gray-800 rounded mt-5 p-4'>
<p className='h3 text-center mb-4'>SignUp</p>
         <div  class="mb-3  ">
    <label for="" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div  class="mb-3  ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
<button onClick={()=>{navgate("/home")}} type='button' class="btn btn-primary">Submit</button>
</form></div>
  )
}
