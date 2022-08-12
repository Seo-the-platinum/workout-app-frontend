import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/user/userSlice'
import NavBar from '../components/navBars/NavBar'
import { useLocation } from 'react-router-dom'
import ProfileInput from '../components/profile/ProfileInput'
import Select from 'react-select'
import '../globalStyles.css'

const EditProfile = () => {
    const location = useLocation()
    const user = location.state
    const [ updatedUser, setUser ] = useState(user)
    const [ errors, setErrors ] = useState({})
    const dispatch = useDispatch()
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
        const request = await fetch(`http://127.0.0.1:5000/users/${user.id}`, {
            body: JSON.stringify(updatedUser),
            headers: {'Content-Type': 'application/json'},
            method: 'PATCH',
        })
    }

    const handleUser = (field, value, error)=> {
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
        
        if (Object.keys(errors).length > 0) {
            return
        } else {
            sendData()
            dispatch(updateUser(updatedUser))
        }
    }

  return (
    <div className='viewContainer' style={{backgroundImage: 'url(./images/profileEdit.jpg)'}}>
        <NavBar/>
        <form className='formContainer'>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%'}}>
                {
                Object.keys(errors).map(key=> <p key={key} style={{color:'red', fontSize: '12px', margin: '1%'}}>{errors[key]}</p>)}
            </div>
            {keys.map(key=> <ProfileInput field={key} key={key} updateUser={handleUser} value={user[key]}/>)}
            <div style={{alignItems: 'center', display: 'flex', justifyContent:'space-between', width: '95%'}}>
                <label>
                    <h3 style={{color: 'white'}}>Weight_units:</h3>
                </label>
                <Select defaultValue={defaultOptions} options={options} styles={{color: 'red'}}/>
            </div>
            <button className='button' onClick={handleSubmit}>
                Update
            </button>
        </form>
    </div>
  )
}

export default EditProfile