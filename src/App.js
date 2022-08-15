import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from './features/user/userSlice'
import { updateRecords } from './features/records/recordsSlice'
import MainNavBar from './components/navBars/MainNavBar'
import Home from './views/Home'
import AddRecord from './views/AddRecord'
import EditRecord from './views/EditRecord'
import Exercises from './views/Exercises'
import Profile from './views/Profile'
import EditProfile from './views/EditProfile'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  const [ data, setData ] = useState(null)
  const dispatch = useDispatch()

    useEffect(()=> {
        const fetchUser = async ()=> {
            const data = await fetch('http://127.0.0.1:5000/users/4')
            const json = await data.json()
            setData(json.user[0])
            dispatch(updateUser(json.user[0].user))
            dispatch(updateRecords(json.user[0].records))
        }
        fetchUser().catch(console.error)
    },[])
  return (
    <div className="App">
      {data && <MainNavBar data={data}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<EditRecord/>}/>
        <Route path='/add' element={<AddRecord/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
      </Routes>
    </div>
  );
}

export default App;
