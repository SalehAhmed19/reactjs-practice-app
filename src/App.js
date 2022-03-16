// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <>
      {
        users.map(user => <DisplayUser name={user.name} email ={user.email}></DisplayUser>)
      }
    </>
  )
}
function DisplayUser(props) {
  return (
    <div className='user'>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}
export default App;
