import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const NavBar = ({exercise, header}) => {
    const message = header === 'add' ? 'Add an exercise' : 'Edit record'
    const color = header === 'add' || exercise === 'Dead Lifts' || exercise === 'Overhead Press' ? 'white' : 'black'
    const navigate = useNavigate()

    const toHome = ()=> {
        navigate('/exercises')
    }

  return (
    <div style={{alignItems:'center', display: 'flex'}}>
        <div style={{display: 'flex'}}>
            <ChevronLeftIcon fontSize='large' onClick={toHome} style={{color: color}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center',}}>
            <h3 style={{color: color}}>{message}</h3>
        </div>
    </div>
  )
}

export default NavBar
