import React from 'react';
import { useSelector } from 'react-redux'
import '../globalStyles.css'

const Home = () => {
  const user = useSelector(state=> state.user.value)
  return (
    <div className='viewContainer' style={{backgroundImage: 'url(./images/home.jpg)'}}>
        { user && <h1 style={{color: 'white'}}>{`Hello ${user.user_name}!`}</h1>}
    </div>
  )
}

export default Home