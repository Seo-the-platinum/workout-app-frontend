import React, { useState } from 'react'

const ProfileInput = ({field, updateUser, value}) => {
    const [inputValue, setValue ] = useState(value)
    const handleChange = (e)=> {
        if (e.target.name) {
            updateUser(field,e.target.value)
            setValue(e.target.value)
        } else if (e.target.value.length > 0){
            updateUser(field, parseInt(e.target.value))
            setValue(parseInt(e.target.value))
        } else {
            setValue('')
        }
    }
  return (
    <div>
        <label>{field}</label>
        <input 
            name={field === 'user_name' ? 'user_name' : undefined} 
            onChange={handleChange} value={inputValue}
            type={field === 'user_name' ? 'text' : 'number'}/> 
    </div>
  )
}

export default ProfileInput