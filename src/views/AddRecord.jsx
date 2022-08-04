import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToRecords } from '../features/records/recordsSlice'
import { useLocation } from 'react-router-dom'
import Select from 'react-select'
import NavBar from '../components/navBars/NavBar'
import { exerciseOptions, restOptions, weightOptions } from '../utils/selectOptions'
import '../globalStyles.css'

const AddRecord = () => {
  const location = useLocation()
  const { records, user_id } = location.state
  const dispatch = useDispatch()
  console.log(user_id)
  const [ data, setData ] = useState({
    exercise: '',
    reps: null,
    rest: restOptions[0].value,
    weight: null,
    weight_units: weightOptions[0].value,
    user_id: user_id
  })

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
    records.map(r=> hashMap[r.exercise] = true)
    return exerciseOptions.filter(o=> hashMap[o.value] !== true)
  }

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
  }
  return (
    <div id='recordContainer' style={{backgroundImage: 'url(./images/add-workout.jpg)'}}>
      <NavBar header={'add'}/>
      <form id='recordFormContainer'>
        <div className='addFieldContainer'>
          <label className='lightLabel'> Exercise:</label>
            <Select name='exercise' onChange={(e)=> handleSelect(e,'exercise')} options={updatedExerciseOptions()}/>
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
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}

export default AddRecord