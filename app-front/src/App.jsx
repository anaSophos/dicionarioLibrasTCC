import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { useState } from 'react'

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
