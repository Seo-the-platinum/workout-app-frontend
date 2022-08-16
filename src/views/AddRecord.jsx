import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToRecords } from '../features/records/recordsSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import NavBar from '../components/navBars/NavBar'
import { restOptions, weightOptions } from '../utils/selectOptions'
import { addErrorChecker } from '../utils/addRecordValidator'
import '../globalStyles.css'

const AddRecord = () => {
  const location = useLocation()
  const { records, user_id } = location.state
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ errors, setErrors ] = useState({})
  const [ data, setData ] = useState({
    exercise: records[0].value,
    reps: 1,
    rest: restOptions[0].value,
    weight: 5,
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
    const hasError = addErrorChecker(e.target.name)
    const regExValue = e.target.value.replace(/^0+/, '')
    if (hasError) {
      setErrors(curr=> {
        return {
          ...curr,
          [e.target.name]: hasError
        }
      })
    } else if (!hasError) {
      if (errors[e.target.name]) {
        setErrors(curr=> {
          const copy = {...curr}
          delete copy[e.target.name]
          return copy
        })
      }
    }
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: regExValue.length < 1 ? '' : parseInt(regExValue)
      }
    })
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
    if (Object.keys(errors).length > 0) {
      return
    } else {
      addRecord().catch(console.error)
      navigate('/exercises')
    }
  }

  return (
    <div className='viewContainer' style={{backgroundImage: 'url(./images/add-workout.jpg)'}}>
      <NavBar header={'add'}/>
      <div>
        {Object.keys(errors).map(error=> <p key={errors[error]} style={{color:'red'}}>{errors[error]}</p>)}
      </div>
      <form className='formContainer'>
        <div className='addFieldContainer'>
          <label className='lightLabel'> Exercise:</label>
            <Select defaultValue={records[0]} name='exercise' onChange={(e)=> handleSelect(e,'exercise')} options={records}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Reps:</label>
          <input id ='reps' name='reps' onChange={handleInput} type='number' value={data.reps.toString()}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Rest:</label>
          <Select defaultValue={restOptions[0]} onChange={(e)=> handleSelect(e,'rest')} options={restOptions}/>
        </div>
        <div className='addFieldContainer'>
          <label className='lightLabel'>Weight:</label>
          <input id='weight' name='weight' onChange={handleInput} type='number' value={data.weight.toString()}/>
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