import React, { useState } from 'react'
import ProfileNavBar from '../components/navBars/ProfileNavBar'
import { useLocation } from 'react-router-dom'
import ProfileInput from '../components/profile/ProfileInput'
import Select from 'react-select'
import '../globalStyles.css'

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
    const defaultOptions = options.filter(o=> o.value === user.weight_units)

    const handleSubmit = (e)=> {
        e.preventDefault()
    }

  return (
    <div className='containerWithImage' style={{backgroundImage: 'url(./images/profileEdit.jpg)',}}>
        <ProfileNavBar/>
        <form style={{
                backgroundColor: 'rgb(255, 255, 255, .3)',
                border:'2px solid rgba(9, 173, 121, 1)', 
                display: 'flex', flexDirection: 'column', 
                alignItems: 'center', 
                width: '95%', 
                borderRadius:'4px'
            }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%'}}>
                {
                Object.keys(errors).map(key=> <p key={key} style={{color:'red', fontSize: '12px', margin: '1%'}}>{errors[key]}</p>)}
            </div>
            {keys.map(key=> <ProfileInput field={key} key={key} updateUser={updateUser} value={user[key]}/>)}
            <div style={{alignItems: 'center', display: 'flex', justifyContent:'space-between', width: '95%'}}>
                <label>Weigh_units:</label>
                <Select defaultValue={defaultOptions} options={options} styles={{color: 'red'}}/>
            </div>
            <button onClick={handleSubmit}>
                Update
            </button>
        </form>
    </div>
  )
}

export default EditProfile