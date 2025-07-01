import React from 'react'

export default function Footer() {
  return (
    <div>
  <footer className="bg-dark text-white ">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <div>
          <a href="#" className="text-white mx-2">Privacy Policy</a>
          |
          <a href="#" className="text-white mx-2">Terms of Service</a>
          |
          <a href="#" className="text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>



    </div>
  )
}
