import { useReducer } from 'react'

import './App.css'

function App() {
 
  type IAction ={
    type: "INCREASE" | "DECREASE"
  }
  const reducerCount = (state: number, action:IAction) => {
    switch(action.type){
      case 'INCREASE':
        return  state + 1
      case 'DECREASE':
        return state - 1
      default:
        return state
    }

  }
  const [number, dispatch] = useReducer(reducerCount, 0) ;

  const handleIncrease = () => {
    dispatch({type: 'INCREASE'})
  }
  const handlDecrease = () => {
    dispatch({type: 'DECREASE'})
  }


  return (
    <>
    <h2>Counter App: useReducer</h2>
    <div className="btn">
      <button onClick={handleIncrease}>+</button>
      <span>{number}</span>
      <button onClick={handlDecrease}>-</button>
    </div>
   
    
    </>
  )
}

export default App
