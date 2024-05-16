import { useReducer } from 'react';
import { UserContext, initialState, reducer } from './STATE';
import './App.css'

import Parent from './components/Parent'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <UserContext.Provider value={{ state, dispatch }}>
      <Parent />
    </UserContext.Provider>
    </>
  )
}

export default App
