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

  const { id, sex, weight, weight_units, feet, inches, email, ...formattedObj } = user
  const height = `${user.feet}'${user.inches}"`
  const formattedWeight = `${user.weight} ${user.weight_units}`
  const objToDisplay = {
    ...formattedObj,
    height,
    formattedWeight
  }
  const keys = Object.keys(objToDisplay)
  return (
    <div id='profileDetails'>
      <div id='profileDetailsList'>
        {keys.map(k=> {
            return <ProfileField key={k} field={k === 'formattedWeight' ? 'weight' : k} value={objToDisplay[k]}/>
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