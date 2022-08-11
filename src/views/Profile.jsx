import React from 'react'
import { useSelector } from 'react-redux'
import ProfileDetails from '../components/profile/ProfileDetails'
import '../globalStyles.css'

const Profile = () => {
  const user = useSelector(state=> state.user.value)
  return (
    <div id='profileContainer' style={{backgroundImage: 'url(./images/profile.jpg)'}}>
      <ProfileDetails user={user}/>
    </div>
  )
}

export default Profile