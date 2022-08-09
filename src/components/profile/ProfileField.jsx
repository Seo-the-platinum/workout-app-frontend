import React from 'react'
import Select from 'react-select'

const ProfileField = ({field, value}) => {
  return (
    <div style={{display: 'flex'}}>
        <h3>{field}</h3>
        <p>{value}</p>
    </div>
  )
}

export default ProfileField