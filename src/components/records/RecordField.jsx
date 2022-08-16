import React, { useState } from 'react'
import Select from 'react-select'
import { exerciseOptions, restOptions, weightOptions } from '../../utils/selectOptions'
import './records.css'

const RecordField = ({field, value, updateField}) => {
  const[input, setInput] = useState(value)
  const[select, setSelect] = useState(value)

  const handleChange = (e)=> {
    const regExValue = e.target.value.replace(/^0+/, '')
    if (regExValue.length > 0) {
      setInput(parseInt(regExValue))
      updateField(field, parseInt(regExValue))
    } else {
      setInput('')
      updateField(field, regExValue)
    }
  }

  const handleSelect = (e)=> {
    setSelect(e.value)
    updateField(field, e.value)
  }

  let options = null

  switch (field) {
    case 'exercise':
      options = exerciseOptions;
      break;
    case 'rest':
      options = restOptions;
      break;
    case 'weight_units':
      options = weightOptions
      break;
    default:
      break;
  }

  
  const defaultValue = options && options.filter(o=> o.value === value)
  
  return (
    <div className='recordFieldContainer'>
      <label>
        <h3>{`${field}:`}</h3>
      </label>
      {
        field === 'weight' || field === 'reps' ? 
        <input className='recordsInput' id={field} type='number' value={input.toString()} onChange={handleChange} /> : 
        <Select onChange={handleSelect} options={options} defaultValue={defaultValue} />
      }
    </div>
  )
}

export default RecordField