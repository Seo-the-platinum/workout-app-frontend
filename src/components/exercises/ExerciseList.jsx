import React from 'react'
import ExerciseLink from './ExerciseLink'
import AddExercise from './AddExercise'

const ExerciseList = ({records, user_id}) => {

  return (
    <div className='exerciseListContainer'>
        <h1>Exercises</h1>
        <AddExercise records={records} user_id={user_id}/>
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