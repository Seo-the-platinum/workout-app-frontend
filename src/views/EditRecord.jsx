import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { recordToDelete, editRecord } from '../features/records/recordsSlice'
import RecordField from '../components/records/RecordField'
import NavBar from '../components/navBars/NavBar'
import '../globalStyles.css'

const EditRecord = () => {
  const location = useLocation()
  const exercise = location.state
  const dispatch = useDispatch()
  const [ data, setData ] = useState({
    reps: exercise.reps,
    rest: exercise.rest,
    weight: exercise.weight,
    weight_units: exercise.weight_units
  })
  
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
    setData({
      ...data,
      [field]: value,
    })
  }

  const handleUpdate = (e)=> {
    e.preventDefault()
    updateRecord().catch(console.error)
  }

  const handleDelete = (e)=> {
    e.preventDefault()
    deleteRecord().catch(console.error)
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
      <form className='formContainer'>
        <h3>{`Exercise: ${exercise.exercise}`}</h3>
        {keys.map(k=> {
          return <RecordField key={k} field={k} value={exercise[k]} updateField={updateField}/>
        })}
        <div style={{display: 'flex', width: '60%', justifyContent: 'space-between'}}>
          <button onClick={handleUpdate} style={{border: 'none', borderRadius: '4px', backgroundColor: 'white', marginBottom: '10%', marginTop: '10%', width: '30%', height: '50px'}}>
            Update
          </button>
          <button onClick={handleDelete} style={{border: 'none', borderRadius: '4px', backgroundColor: 'white', marginBottom: '10%', marginTop: '10%', width: '30%', height: '50px'}}>
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditRecord