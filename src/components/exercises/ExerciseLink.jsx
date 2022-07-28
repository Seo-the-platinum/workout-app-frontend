import React from 'react'
import './exerciseStyles.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'

const ExerciseLink = ({exercise}) => {
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate(`/edit`, {state:{...exercise}})
    }
  return (
    <div className='exerciseContainer'>
        <h3>{exercise.exercise}</h3>
        <h3>{exercise.weight}</h3>
        <h3>{`${exercise.reps} reps`}</h3>
        <ChevronRightIcon fontSize='large' onClick={handleClick}/>
    </div>
  )
}

export default ExerciseLink