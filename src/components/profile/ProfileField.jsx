import React from 'react'

const ProfileField = ({field, value}) => {
  
  return (
    <div style={{alignItems:'center', display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px',minWidth: '90%'}}>
        <h2 style={{color:'white', margin: 0}}>{field}:</h2>
        <p style={{color: 'white', fontSize: '24px'}}>{value}</p>
    </div>
  )
}

export default ProfileField