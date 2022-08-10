import React from 'react'
import ProfileField from './ProfileField'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'

const ProfileDetails = ({user}) => {
  const navigate = useNavigate()
  const toEditProfile = ()=> {
    navigate('/edit-profile', {state:{...user}})
  }
  const keys = Object.keys(user).filter(key=> key !== 'sex' && key !== 'id' && key !== 'email')
  return (
    <div style={{display: 'flex', alignItems: 'center',}}>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {keys.map(k=> {
            return <ProfileField key={k} field={k} value={user[k]}/>
        })}
      </div>
      <ChevronRightIcon size='large' onClick={toEditProfile}/>
    </div>
  )
}

export default ProfileDetails