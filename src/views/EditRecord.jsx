import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecordField from '../components/records/RecordField'
import '../globalStyles.css'
import NavBar from '../components/navBar/NavBar'
const EditRecord = () => {
  const location = useLocation()
  const exercise = location.state
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
  }

  const updateField = (field, value)=> {
    console.log(field, value)
    setData({
      ...data,
      [field]: value,
    })
  }

  const handleClick = (e)=> {
    e.preventDefault()
    updateRecord().catch(console.error)
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

  
  const keys = Object.keys(exercise).filter(k=> k !== 'id' && k !== 'exercise')
  //O(n), chaining methods is the same a sequential, not nested loops
  
  return (
    <div id='recordContainer' style={{backgroundImage: `url(${backgroundImage})`,}}>
      <NavBar header={'edit'}/>
      <form id='recordFormContainer'>
        <h3>{`Exercise: ${exercise.exercise}`}</h3>
        {keys.map(k=> {
          return <RecordField key={k} field={k} value={exercise[k]} updateField={updateField}/>
        })}
        <button onClick={handleClick} style={{border: 'none', borderRadius: '4px', backgroundColor: 'white', marginBottom: '10%', marginTop: '10%', width: '30%', height: '50px'}}>
          Update
        </button>
      </form>
    </div>
  )
}

export default EditRecord