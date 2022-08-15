import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { recordToDelete, editRecord } from '../features/records/recordsSlice'
import RecordField from '../components/records/RecordField'
import NavBar from '../components/navBars/NavBar'
import { editErrorChecker } from '../utils/editRecordValidator'
import '../globalStyles.css'

const EditRecord = () => {
  const location = useLocation()
  const exercise = location.state
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ data, setData ] = useState({
    reps: exercise.reps,
    rest: exercise.rest,
    weight: exercise.weight,
    weight_units: exercise.weight_units
  })
  const [ errors, setErrors ] = useState({})

  const updateRecord = async ()=> {
     await fetch(`http://127.0.0.1:5000/records/${exercise.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    )
    dispatch(editRecord({...data, exercise: exercise.exercise, id: exercise.id}))
  }

  const deleteRecord = async ()=> {
   await fetch(`http://127.0.0.1:5000/records/delete/${exercise.id}`, {
    method: 'DELETE',
    header: {'Content-Type': 'application/json'}
   })
   dispatch(recordToDelete(exercise.id))
  }

  const updateField = (field, value)=> {
    const hasErrors = editErrorChecker(field, value)
    if (hasErrors) {
      setErrors(curr=> {
        return {
          ...curr,
          [field]: hasErrors
        }
      })
    } else if (!hasErrors) {
      setErrors(curr=> {
        const copy = {...curr,}
        delete copy[field]
        return copy
      })
    }
    setData({
      ...data,
      [field]: value,
    })
  }

  const handleUpdate = (e)=> {
    e.preventDefault()
    if (!Object.keys(errors).length) {
      console.log('no errors here!')
      updateRecord().catch(console.error)
      navigate('/exercises')
    } else {
      return
    }
  }

  const handleDelete = (e)=> {
    e.preventDefault()
    deleteRecord().catch(console.error)
    navigate('/exercises')
  }

  let backgroundImage

  switch(exercise.exercise) {
    case 'Bench Press':
      backgroundImage = './images/benchpress.jpg'
      break;
    case 'Dead Lifts':
      backgroundImage = './images/deadlifts.jpg'
      break;
    case 'Rear Squats':
      backgroundImage = './images/rear-squat.jpg'
      break;
    case 'Overhead Press':
      backgroundImage = './images/db-shoulder-press.jpg'
      break;
    case 'Curls':
      backgroundImage = './images/db-curls.jpg'
      break;
    case 'Tricep Pushdown':
      backgroundImage = './images/tricep-dips.jpg'
      break;
    default:
      break;
  }

  
  //O(n), chaining methods is the same as sequential, not nested loops
  const keys = Object.keys(exercise).filter(k=> k !== 'id' && k !== 'exercise')
  
  return (
    <div className='viewContainer' style={{backgroundImage: `url(${backgroundImage})`,}}>
      <NavBar header={'edit'} exercise={exercise.exercise}/>
      {Object.keys(errors).map(error=> {
        return <p key={error} style={{color: 'red'}}>{errors[error]}</p>
      })}
      <form className='formContainer'>
        <h3>{`Exercise: ${exercise.exercise}`}</h3>
        {keys.map(k=> {
          return <RecordField key={k} field={k} value={exercise[k]} updateField={updateField}/>
        })}
        <div style={{display: 'flex', width: '60%', justifyContent: 'space-between'}}>
          <button className='button' onClick={handleUpdate}>
            Update
          </button>
          <button className='button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditRecord