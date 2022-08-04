import React from 'react'
import { useSelector } from 'react-redux'
import ProfileDetails from '../components/profile/ProfileDetails'

const Profile = () => {
  const user = useSelector(state=> state.user.value)
  return (
    <div>
      <ProfileDetails user={user}/>
    </div>
  )
}

export default Profile