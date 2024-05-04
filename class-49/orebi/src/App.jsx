
import React from 'react'

import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
