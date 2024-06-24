import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

interface User{
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }

}

function App() {
  const [fetchData, setFetchedData] = useState<User[]>([]);

  const getUsers = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => setFetchedData(res.data))
    .catch(error => console.log(error))
  }
  
  const getUser = async (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setFetchedData([res.data]))
    .catch(error => console.log(error))
  }
  
  useEffect(() => {
    getUsers()
    //  fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(response => response.json())
    //  .then(data => setFetchedData(data))
    //  .then((error) => console.log(error))
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = e.currentTarget.id.value;
    if(Number(id)){
      getUser(id)
    }else{
      alert('Please enter a valid number')
    }
    console.log(id)
  }
 console.log(fetchData)
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name= 'id' />
        <button type='submit'>Search</button>
      </form>
    </div>
    <div className='users'>
      {fetchData ? (
        fetchData.map((user: User) => (
          <div key={user.id} className='user'>
            <p>Name:{user.name}</p>
            <p>userName:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        ))
      ) : (<div> no data found</div>)}
    </div>
    </>
  )
}

export default App
