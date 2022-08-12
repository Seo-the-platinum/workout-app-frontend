import React from 'react'
import ProfileField from './ProfileField'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'
import './profileStyles.css'

const ProfileDetails = ({user}) => {
  const navigate = useNavigate()
  const toEditProfile = ()=> {
    navigate('/edit-profile', {state:{...user}})
  }
  const keys = Object.keys(user).filter(key=> key !== 'sex' && key !== 'id' && key !== 'email')
  return (
    <div id='profileDetails'>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
        {keys.map(k=> {
            return <ProfileField key={k} field={k} value={user[k]}/>
        })}
      </div>
      <div style={{alignItems: 'center', display: 'flex',}}>
        <p style={{color: 'white'}}>Update</p>
        <ChevronRightIcon style={{color: 'white'}} fontSize='large' onClick={toEditProfile}/>
      </div>
    </div>
  )
}

export default ProfileDetails