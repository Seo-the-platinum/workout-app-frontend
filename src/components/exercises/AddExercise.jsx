import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'

const AddExercise = ({records, user_id}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/add', {state:{records, user_id}})
    }
    
  return (
    <div style={{display: 'flex'}}>
        <h3>Add an exercise</h3>
        <ChevronRightIcon fontSize='large' onClick={handleClick}/>
    </div>
  )
}

export default AddExercise