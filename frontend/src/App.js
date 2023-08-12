
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ComponentOne from './components/ComponentOne'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      <h1>Users: </h1>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
      <ComponentOne/>
    </div>
  )
}

export default App