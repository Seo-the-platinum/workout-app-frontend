import React from 'react'

const ProfileField = ({field, value}) => {
  const upperCaseField = field[0].toUpperCase().concat(field.slice(1))
  return (
    <div style={{alignItems:'center', display: 'flex', justifyContent: 'space-between', minWidth: '85%'}}>
        <h3 style={{color:'white', margin: 0}}>{upperCaseField}</h3>
        <p style={{color: 'white',}}>{value}</p>
    </div>
  )
}

export default ProfileField