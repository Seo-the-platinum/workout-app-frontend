import React from 'react'
import ExerciseLink from './ExerciseLink'

const ExerciseList = ({records}) => {
  return (
    <div className='exerciseListContainer'>
        <h1>Exercises</h1>
        {
            records.map(r=> {
               return (
                <ExerciseLink exercise={r} key={r.id}/>
                )
            })
        }
    </div>
  )
}

export default ExerciseList