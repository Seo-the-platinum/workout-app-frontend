import React, { useState } from 'react'
import { errorChecker } from '../../utils/inputErrorChecker'

const ProfileInput = ({field, updateUser, value}) => {
    const [inputValue, setValue ] = useState(value)

    const handleChange = (e)=> {
        const hasErrors = errorChecker(e.target.name)
        const regExValue = e.target.value.replace(/^0+/, '')
        if (!hasErrors) {
            if (e.target.name === 'user_name') {
                updateUser(field, regExValue)
                setValue(regExValue)
            } else if (e.target.value.length > 0){
                console.log(e.target.value, parseInt(regExValue))
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
    console.log(typeof inputValue)
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', minWidth: '95%'}}>
        <label>
            <h3 style={{color: 'white'}}>{field}</h3>
        </label>
        <input
            className='input'
            id={field}
            name={field} 
            onChange={handleChange}
            value={inputValue}
            style={{fontSize: '18px', height: '35px', textAlign:'right', width: field === 'user_name' ? '40%' : '20%'}}
            type={field === 'user_name' ? 'text' : 'number'}/>
    </div>
  )
}

export default ProfileInput