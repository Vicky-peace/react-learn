import { useState } from 'react'
import Jokes from './data.json';
import './App.css'
interface Joke{
  id: number;
  joke: string;
  rating: number;
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([])
 const updateRate = (id: number, rating: number) => {
  const newJoke = jokes.map((joke) => {
    if(joke.id == id){
      return {...joke, rating}
    }
    return joke;
  })
  setJokes(newJoke);
 }

  return (
    <div className="container"> 
      <h1>Jokes</h1>
     <form action="">
     </form>
     <div className="jokes">
        {Jokes && Jokes.map(joke => (
          <div key={joke.id} className="joke">
            <h3>{joke.joke}</h3>
            <p>{joke.rating}</p>
           
            <div className="joke-buttons">
            <button onClick={() => updateRate(joke.id,joke.rating + 1)}>👍</button>
            <button onClick={() => updateRate(joke.id,joke.rating - 1)}>👎</button>

            </div>
          </div>
        ))}
     </div>
      
    </div>
  )
}

export default App
