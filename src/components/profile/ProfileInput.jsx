import React, { useState } from 'react'
import { errorChecker } from '../../utils/inputErrorChecker'
import './profileStyles.css'

const ProfileInput = ({field, updateUser, value}) => {
    const [inputValue, setValue ] = useState(value)

    const handleChange = (e)=> {
        const hasErrors = errorChecker(e.target.name)
        const regExValue = e.target.value.replace(/^0+/, '')

        if (!hasErrors) {
            if (e.target.name === 'user_name') {
                updateUser(field, e.target.value)
                setValue(e.target.value)
            } else if (e.target.value.length > 0){
                updateUser(field, parseInt(regExValue))
                setValue(parseInt(regExValue))
            } else {
                setValue('')
            }
        } else {
            updateUser(field, e.target.value, hasErrors)
            setValue(regExValue)
        }
    }
  return (
    <div id='profileInputContainer'>
        <label>
            <h3 style={{color: 'white'}}>{field}</h3>
        </label>
        <input
            className='profileInput'
            id={field}
            name={field} 
            onChange={handleChange}
            value={inputValue.toString()}
            style={{width: field === 'user_name' ? '40%' : '20%'}}
            type={field === 'user_name' ? 'text' : 'number'}/>
    </div>
  )
}

export default ProfileInput