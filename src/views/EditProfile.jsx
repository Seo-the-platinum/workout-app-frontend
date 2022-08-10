import React, { useState } from 'react'
import ProfileNavBar from '../components/navBars/ProfileNavBar'
import { useLocation } from 'react-router-dom'
import ProfileInput from '../components/profile/ProfileInput'
import Select from 'react-select'

const EditProfile = () => {
    const location = useLocation()
    const user = location.state
    const [ updatedUser, setUser ] = useState(user)
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

    const updateUser = (field, value)=> {
        setUser(curr=> {
           return {
            ...curr,
            [field]: value
           }
        })
    }
    console.log(updatedUser)
    const keys = Object.keys(user).filter(key=> key !== 'sex' && key !== 'weight_units' && key !== 'id' && key !== 'email')

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log('do the fire!')
    }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <ProfileNavBar/>
        <form>
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