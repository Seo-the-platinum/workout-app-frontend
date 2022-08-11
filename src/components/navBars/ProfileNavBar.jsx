import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const ProfileNavBar = () => {
    const navigate = useNavigate()
    const toProfile = ()=> {
        navigate('/profile')
    }
  return (
    <div style={{alignItems: 'center', display: 'flex', width: '100%',}}>
        <ChevronLeftIcon fontSize='large' onClick={toProfile}/>
        <h3>Edit Profile</h3>
    </div>
  )
}

export default ProfileNavBar