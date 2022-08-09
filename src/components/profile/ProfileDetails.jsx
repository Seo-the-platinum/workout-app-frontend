import React from 'react'
import ProfileField from './ProfileField'

const ProfileDetails = ({user}) => {
  const keys = Object.keys(user).filter(key=> key !== 'sex' && key !== 'id' && key !== 'email')
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {keys.map(k=> {
            return <ProfileField key={k} field={k} value={user[k]}/>
        })}
    </div>
  )
}

export default ProfileDetails