import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [fetchData, setFetchedData] = useState([]) 
  
  useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setFetchedData(res.data))
     .then((error) => console.log(error))
  },[])
 console.log(fetchData)
  return (
    <>
      {fetchData ? (
        fetchData.map((user: User) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
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
    </>
  )
}

export default App