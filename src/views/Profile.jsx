import React from 'react'
import { useSelector } from 'react-redux'
import ProfileDetails from '../components/profile/ProfileDetails'
import '../globalStyles.css'

const Profile = () => {
  const user = useSelector(state=> state.user.value)
  return (
    <div className='viewContainer' style={{backgroundImage: 'url(./images/cmpProfile2.jpg)'}}>
      <h1 style={{color: 'white'}}>Profile</h1>
      <ProfileDetails user={user}/>
    </div>
  )
}

export default Profile