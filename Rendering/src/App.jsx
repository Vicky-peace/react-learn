import { useState } from 'react'
import './App.scss'
import Joke from './componets/Joke'
import jokedata from './data.json';

function App() {


  return (
    <div className='app'>
    {jokedata && jokedata.map((joke) => {
      return(
       <Joke key={joke.id} id={joke.id} joke={joke.joke}  rating= {joke.rating}/>
      )
    })}
    </div>
  )
}

export default App
