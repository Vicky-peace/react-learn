
import './App.css'

function App() {
const sendToServer = (e: any) => {
 e.preventDefault()
 alert('form submitted')
}

  return (
    <>
      <form onSubmit={sendToServer}>
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" placeholder='Enter you name'/>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
