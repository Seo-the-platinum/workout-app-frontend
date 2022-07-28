import React from 'react'
import { useLocation } from 'react-router-dom'

const Record = () => {
  const location = useLocation()
  const exercise = location.state
  console.log('something here:', location.state)
  //O(n), chaining methods is the same a sequential, not nested loops
  return (
    <div className='recordsContainer'>
      {exercise.exercise}
    </div>
  )
}

export default Record