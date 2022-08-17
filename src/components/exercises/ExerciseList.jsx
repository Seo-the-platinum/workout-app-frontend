import React, { useMemo } from 'react'
import ExerciseLink from './ExerciseLink'
import AddExercise from './AddExercise'
import { exerciseOptions } from '../../utils/selectOptions'
import './exerciseStyles.css'

const ExerciseList = ({records, user_id}) => {
  const updatedExerciseOptions = ()=> {
    const hashMap = {}
    records && records.map(r=> hashMap[r.exercise] = true)
    return exerciseOptions.filter(o=> hashMap[o.value] !== true)
  }

  const filteredExercises = useMemo(()=> {
    return updatedExerciseOptions()
  },[records])
  
  
  return (
    <div className='exerciseListContainer'>
        {
          filteredExercises.length > 0 || !records ?
        <AddExercise records={filteredExercises} user_id={user_id} /> :
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