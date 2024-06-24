
import './App.css'
import useFetch from './hooks/useFetch'
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
const [fetchData] = useFetch();


  

  
  


  return (
    <>
    <div>
     
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