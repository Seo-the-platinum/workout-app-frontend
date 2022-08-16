import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import './navBarStyles.css'

const NavBar = ({exercise, header}) => {
    const message = header === 'add' ? 'Add Record' : 'Edit Record'

    const color = header === 'add' || 
        exercise === 'Dead Lifts' || 
        exercise === 'Overhead Press' ||
        exercise === 'Rear Squats' ||
        exercise === 'Tricep Pushdown' ||
        !exercise ? 'white' : 'black'
        
    const navigate = useNavigate()
    const toMain = ()=> {
        const path = header ? 'exercises' : 'profile'
        navigate(`/${path}`)
    }

  return (
    <div className='navBarContainer'>
        <div id='navBarBackArrow'>
            <ChevronLeftIcon fontSize='large' onClick={toMain} style={{color: color}}/>
        </div>
        <div id='navBarHeader'>
            <h1 style={{color: color}}>{header ? message : 'Edit Profile'}</h1>
        </div>
    </div>
  )
}

export default NavBar
