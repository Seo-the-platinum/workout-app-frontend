import React from 'react'
import ExerciseList from '../components/exercises/ExerciseList'
import { useSelector } from 'react-redux'

const Exercises = () => {
  const user = useSelector(state=> state.user.value)
  const records = useSelector(state=> state.records.value)
  const { id } = user
  return (
    <div id='exercisesContainer' style={{backgroundImage: 'url(./images/exercise.jpg'}}>
      <ExerciseList user_id={id} records={records}/>
    </div>
  )
}

export default Exercises