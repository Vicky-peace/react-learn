import { useReducer, useState } from 'react'
import './App.css'
import JokesData from './data.json';


interface Joke {
  id: number;
  joke: string;
  rating: number;
}
type ActionType = 
  | { type: 'ADD_JOKE', joke: string }
  | { type: 'UPDATE_RATE', id: number, change: number }
  |{type:'DELETE_JOKE',id:number}
  |{type:'EDIT_JOKE',id:number; newJoke: string}

  function jokeReducer(state: Joke[], action: ActionType): Joke[] {
    switch (action.type) {
      case 'ADD_JOKE':
        return [...state, { id: state.length + 1, joke: action.joke, rating: 0 }];
      case 'UPDATE_RATE':
        return state.map((joke) => {
          if (joke.id === action.id) {
            return { ...joke, rating: joke.rating + action.change };
        
          }
          return joke;
        });

        case "EDIT_JOKE":
          return state.map(joke => 
            joke.id === action.id ? {...joke, joke: action.newJoke} : joke
          )

          case "DELETE_JOKE": 
          return state.filter(joke => joke.id !== action.id)
      default:
        return state;
    }
  }

function App() {
  const [jokes, dispatch] = useReducer(jokeReducer, JokesData);
  const [editText,setEdit] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newJoke = (e.currentTarget[0] as HTMLInputElement).value;
    dispatch({ type: 'ADD_JOKE', joke: newJoke });
    e.currentTarget.reset();
  }

  const handleEdit = (id: number, text: string) => {
      dispatch({type: "EDIT_JOKE", id:id, newJoke: text})
      setEdit('')
  }



  return (
    
    <div className='container'>
      <h2>Jokes for you 💀</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a joke' />
        <button type='submit'>AddJoke</button>
      </form>
      <div className="jokes">
        {jokes && jokes.sort((a, b) => b.rating - a.rating).map((joke) => (
          <div key={joke.id} className='joke'>
            {Number(editText) === joke.id ? (
              <input 
              type="text"
              defaultValue={joke.joke}
              onBlur={(e) => handleEdit(joke.id, e.target.value)} />
            ): (
              <div className='joke-text'>{joke.joke}</div>
            )}
            <div className="joke-cont">
           
            <div className='rate'>{joke.rating}</div>
            </div>
            
            <div className="rate-buttons">
              <button onClick={() => dispatch({ type: 'UPDATE_RATE', id: joke.id, change: 1 })}>👍</button>
              <button onClick={() => dispatch({ type: 'UPDATE_RATE', id: joke.id, change: -1 })}>👎</button>
              <button onClick={()=> setEdit(joke.id.toString()) }>Edit</button>
              <button onClick={()=> dispatch({type:'DELETE_JOKE', id: joke.id})}>Delete</button>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
