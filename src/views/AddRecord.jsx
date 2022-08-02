import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Select from 'react-select'
import NavBar from '../components/navBar/NavBar'
import { exerciseOptions, restOptions, weightOptions } from '../utils/selectOptions'
import '../globalStyles.css'

const AddRecord = () => {
  const location = useLocation()
  const { records, user_id } = location.state

  const [ data, setData ] = useState({
    exercise: '',
    reps: null,
    rest: '',
    weight: null,
    weight_units: '',
    user_id: user_id
  })

  const handleSelect = (e)=> {
    console.log(e)
  }
  
  const handleInput = (e)=> {
    console.log(e)
  }
  const updatedExerciseOptions = ()=> {
    const hashMap = {}
    records.map(r=> hashMap[r.exercise] = true)
    return exerciseOptions.filter(o=> hashMap[o.value] !== true)
  }

  return (
    <div id='recordContainer' style={{backgroundImage: 'url(./images/add-workout.jpg)'}}>
      <NavBar header={'add'}/>
      <form id='recordFormContainer'>
        <div className='addFieldContainer'>
          <label className='lightLabel'> Exercise:</label>
            <Select onChange={handleSelect} options={updatedExerciseOptions()}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Reps:</label>
          <input name='reps' onChange={handleInput} type='number'/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Rest:</label>
          <Select defaultValue={restOptions[0]} options={restOptions}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Weight</label>
          <input type='number'/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Weight Units:</label>
          <Select defaultValue={weightOptions[0]} options={weightOptions}/>
        </div>
      </form>
    </div>
  )
}

export default AddRecord