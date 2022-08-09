import React from 'react'
import ExerciseLink from './ExerciseLink'
import AddExercise from './AddExercise'
import { exerciseOptions } from '../../utils/selectOptions'
import './exerciseStyles.css'

const ExerciseList = ({records, user_id}) => {
  //useMemo potentially
  const updatedExerciseOptions = ()=> {
    const hashMap = {}
    records && records.map(r=> hashMap[r.exercise] = true)
    return exerciseOptions.filter(o=> hashMap[o.value] !== true)
  }
  return (
    <div className='exerciseListContainer'>
        <h1 style={{color: 'white'}}>Exercises</h1>
        {
          updatedExerciseOptions().length > 0 || !records ?
        <AddExercise records={records} user_id={user_id}/> :
        null
        }
        {
            records && records.map(r=> {
               return (
                <ExerciseLink exercise={r} key={r.id}/>
                )
            })
        }
    </div>
  )
}

export default ExerciseList