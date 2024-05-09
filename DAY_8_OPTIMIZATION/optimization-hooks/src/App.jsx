import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UsingMemo from './components/UsingMemo'
import UsingCallback from './components/UsingCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsingCallback />
    </>
  )
}

export default App
