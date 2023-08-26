import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <div className="card">
        <p>Finish week 3 module 3 </p>
        <button>Done</button>
        <button>Edit</button>
      </div>
      <div className="card">
      <p>Finish week 4 module 3 </p>
        <button>Done</button>
        <button>Edit</button>
      </div>
    </>
  )
}

export default App
