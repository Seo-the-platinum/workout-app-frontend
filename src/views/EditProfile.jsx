import React, { useState } from 'react'
import ProfileNavBar from '../components/navBars/ProfileNavBar'
import { useLocation } from 'react-router-dom'
import ProfileInput from '../components/profile/ProfileInput'
import Select from 'react-select'

const EditProfile = () => {
    const location = useLocation()
    const user = location.state
    const [ updatedUser, setUser ] = useState(user)
    const [ errors, setErrors ] = useState({})
    const options = [
        {
            label: 'LBS',
            value: 'LBS'
        },
        {
            label: 'KGS',
            value: 'KGS'
        }
    ]

    const sendData = async ()=> {
        const data = await fetch('http://127.0.0.1:5000', {
            body: JSON.stringify(updatedUser),
            headers: {'Content-Type': 'application/json'},
            method: 'PATCH',
        })
    }

    const updateUser = (field, value, error)=> {
        if (error) {
            setErrors(prev=> {
                return {
                    ...prev,
                    [field]: error,
                }
            })
        } else if (!error) {
            setErrors(prev=> {
                const copy = {...prev}
                delete copy[field]
                return copy
            })
        }
        setUser(curr=> {
           return {
            ...curr,
            [field]: value
           }
        })
    }
    const keys = Object.keys(user).filter(key=> key !== 'sex' && key !== 'weight_units' && key !== 'id' && key !== 'email')

    const handleSubmit = (e)=> {
        e.preventDefault()
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <ProfileNavBar/>
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', width: '50%', justifyContent: 'center'}}>
                {
                Object.keys(errors).map(key=> <p style={{margin: '0'}}>{errors[key]}</p>)}
            </div>
            {keys.map(key=> <ProfileInput field={key} key={key} updateUser={updateUser} value={user[key]}/>)}
            <Select options={options}/>
            <button onClick={handleSubmit}>
                Update
            </button>
        </form>
    </div>
  )
}

export default EditProfile