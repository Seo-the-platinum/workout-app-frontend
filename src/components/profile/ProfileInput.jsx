import React, { useState } from 'react'
import { errorChecker } from '../../utils/inputErrorChecker'

const ProfileInput = ({field, updateUser, value}) => {
    const [inputValue, setValue ] = useState(value)

    const handleChange = (e)=> {
        const hasErrors = errorChecker(e.target.name)
        if (!hasErrors) {
            if (e.target.name === 'user_name') {
                updateUser(field, e.target.value)
                setValue(e.target.value)
            } else if (e.target.value.length > 0){
                updateUser(field, parseInt(e.target.value))
                setValue(parseInt(e.target.value))
            } else {
                setValue('')
            }
        } else {
            updateUser(field, e.target.value, hasErrors)
            setValue(e.target.value)
        }
    }
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', minWidth: '95%'}}>
        <label>{field}</label>
        <input
            className='input'
            id={field}
            name={field} 
            onChange={handleChange} value={inputValue}
            required
            style={{fontSize: '18px', height: '35px', textAlign:'right',}}
            type={field === 'user_name' ? 'text' : 'number'}/>
    </div>
  )
}

export default ProfileInput