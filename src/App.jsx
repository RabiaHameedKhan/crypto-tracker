import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="h-screen flex items-center justify-center bg-green-900">
      <h1 className="text-4xl font-bold text-white">Hello, Tailwind!</h1>
    </div>
       
    </>
  )
}

export default App
