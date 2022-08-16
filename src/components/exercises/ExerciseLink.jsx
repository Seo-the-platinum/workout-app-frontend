import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'
import './exerciseStyles.css';

const ExerciseLink = ({exercise}) => {
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate(`/edit`, {state:{...exercise}})
    }
  return (
    <div className='exerciseLinkContainer'>
      <div id='exerciseSummary'>
        <h3 style={{margin: '0', color: 'white'}}>{exercise.exercise}</h3>
        <div style={{display:'flex', gap: '10px'}}>
          <p style={{color: 'white',}}>{`${exercise.weight} ${exercise.weight_units}`}</p>
          <p style={{color: 'white'}}>{`${exercise.reps} reps`}</p>
        </div>
      </div>
      <div style={{alignItems: 'center', display: 'flex',}}>
        <p style={{color: 'white'}}>Update/Delete</p>
        <ChevronRightIcon fontSize='large' onClick={handleClick} style={{color: 'white'}}/>
      </div>
    </div>
  )
}

export default ExerciseLink