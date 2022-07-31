import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RecordField from '../components/records/RecordField'
import '../globalStyles.css'

const Record = () => {

  const location = useLocation()
  const exercise = location.state
  const navigate = useNavigate()
  const [ reps, setReps ] = useState(exercise.reps)
  const [ rest, setRest ] = useState(exercise.rest)
  const [ weight, setWeight ] = useState(exercise.weight)
  const [ weight_units, setWeight_units ] = useState(exercise.weight_units)
  const [ data, setData ] = useState({
    reps: exercise.reps,
    rest: exercise.rest,
    weight: exercise.weight,
    weight_units: exercise.weight_units
  })

  const toHome = ()=> {
    navigate('/')
  }
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
  console.log('data ho!',data)
  const keys = Object.keys(exercise).filter(k=> k !== 'id' && k !== 'exercise')
  //O(n), chaining methods is the same a sequential, not nested loops
  console.log(exercise.id)
  return (
    <div id='recordContainer' style={{backgroundImage: 'url(./images/benchpress.jpg)',}}>
      <div style={{flex: '1'}}>
        <h3>Edit Record</h3>
      </div>
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

export default Record