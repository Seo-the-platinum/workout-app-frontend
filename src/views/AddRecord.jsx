import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToRecords } from '../features/records/recordsSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import NavBar from '../components/navBars/NavBar'
import { exerciseOptions, restOptions, weightOptions } from '../utils/selectOptions'
import '../globalStyles.css'

const AddRecord = () => {
  const location = useLocation()
  const { records, user_id } = location.state
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //figure out way to fix bug when updating exercise without changing initial selection
  //pass data from link
  const [ data, setData ] = useState({
    exercise: '',
    reps: null,
    rest: restOptions[0].value,
    weight: null,
    weight_units: weightOptions[0].value,
    user_id: user_id
  })

  console.log(data.exercise)

  const handleSelect = (e, field)=> {
    setData(prev => {
      return {
        ...prev,
        [field]: e.value,
      }
    })
  }
  
  const handleInput = (e)=> {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: parseInt(e.target.value)
      }
    })
  }

  const updatedExerciseOptions = ()=> {
    const hashMap = {}
    records && records.map(r=> hashMap[r.exercise] = true)
    return exerciseOptions.filter(o=> hashMap[o.value] !== true)
  }

  const filteredExercises = updatedExerciseOptions()

  const addRecord = async ()=> {
    const request = await fetch('http://127.0.0.1:5000/records/create', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const record_id = await request.json()
    const modifiedObj = Object.keys(data).filter(key=> key !== 'user_id').reduce((obj, key)=> {
      obj[key] = data[key]
      return obj
    },{})
    dispatch(addToRecords({...modifiedObj, id: record_id.record}))
  }

  const handleAdd = (e)=> {
    e.preventDefault()
    addRecord().catch(console.error)
    navigate('/exercises')
  }
  return (
    <div className='viewContainer' style={{backgroundImage: 'url(./images/add-workout.jpg)'}}>
      <NavBar header={'add'}/>
      <form className='formContainer'>
        <div className='addFieldContainer'>
          <label className='lightLabel'> Exercise:</label>
            <Select defaultValue={filteredExercises[0]} name='exercise' onChange={(e)=> handleSelect(e,'exercise')} options={filteredExercises}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Reps:</label>
          <input name='reps' onChange={handleInput} type='number'/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Rest:</label>
          <Select defaultValue={restOptions[0]} onChange={(e)=> handleSelect(e,'rest')} options={restOptions}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Weight:</label>
          <input name='weight' onChange={handleInput} type='number'/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Weight Units:</label>
          <Select defaultValue={weightOptions[0]} onChange={(e)=> handleSelect(e, 'weight_units')} options={weightOptions}/>
        </div>
        <button className='button' onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}

export default AddRecord