import { useState } from 'react'
import {useLocalStorage} from './hooks/useLocalStorage';
import './App.css'

function App() {
const [value, setValue]  =  useState('');

const {setItem, getItem, removeItem} = useLocalStorage('value');


  return (
    <div className='tutorial-sports'>
         <h1 className='header'>UseLocalStorage</h1>
         <input
          type="text" 
          className='input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <div className="btns">
            <button onClick={()=> setItem(value)}>Set</button>
            <button onClick={() => console.log(getItem())}>Get</button>
            <button onClick={removeItem}>Remove</button>
          </div>
    </div>
  )
}

export default App
