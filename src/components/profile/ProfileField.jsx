import React from 'react'

const ProfileField = ({field, value}) => {
  
  return (
    <div style={{alignItems:'center', display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        <h4 style={{margin: 0}}>{field}</h4>
        <p>{value}</p>
    </div>
  )
}

export default ProfileField