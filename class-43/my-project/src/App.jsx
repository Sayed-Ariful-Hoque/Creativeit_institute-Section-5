import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let openRef = useRef(null)

let OpenClikButton = () => {
 if( (  openRef.current.style.display == "none")){
  openRef.current.style.display = "block"
 }
 else{
  openRef.current.style.display = "none"
 }
}

  return (


    <>
   <div className='w-[600px] mx-auto mt-20'>
    <button onClick={OpenClikButton} className=' bg-slate-400 rounded-md p-5'>open</button>
    <ul className='hidden' ref={openRef} >
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
   </div>
    </>
  )
}

export default App
