import React from 'react'
import './records.css'

const RecordField = ({field, value}) => {
  return (
    <div className='recordFieldContainer'>
        <p>
            {field}
        </p>
        <p>
            {value}
        </p>
    </div>
  )
}

export default RecordField