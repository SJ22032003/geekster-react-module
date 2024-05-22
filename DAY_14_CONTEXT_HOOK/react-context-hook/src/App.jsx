import { useState, createContext } from 'react';
import './App.css'
import Parent from './components/Parent'

export const UserContext = createContext();

function App() {


  const [name, setName] = useState("sahil")

  return (
    <>
    <UserContext.Provider value={{ name, setName,  }}>
      <Parent  />
    </UserContext.Provider>
    </>
  )
}

export default App
