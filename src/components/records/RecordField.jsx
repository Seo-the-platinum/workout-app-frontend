import React, { useState } from 'react'
import Select from 'react-select'
import './records.css'
import { exerciseOptions, restOptions, weightOptions } from '../../utils/selectOptions'

const RecordField = ({field, value}) => {
  const[input, setInput] = useState(value)
  const[select, setSelect] = useState(value)

  const handleChange = (e)=> {
    setInput(e.target.value)
  }

  const handleSelect = (e)=> {
    setSelect(e.value)
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
      <label style={{alignItems:'center',display: 'flex', fontSize: '18px',}}>
        {`${field}:`}
        </label>
        {field === 'weight' || field === 'reps' ? 
        <input type='number' value={input} onChange={handleChange} style={{height: '35px', textAlign: 'right', width: '75px', fontSize: '18px'}}/> : 
        <Select onChange={handleSelect} options={options} defaultValue={defaultValue} />}
    </div>
  )
}

export default RecordField