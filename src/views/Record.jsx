import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RecordField from '../components/records/RecordField'

const Record = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const toHome = ()=> {
    navigate('/')
  }
  const exercise = location.state
  const keys = Object.keys(exercise).filter(k=> k !== 'id')
  //O(n), chaining methods is the same a sequential, not nested loops
  return (
    <div style={{backgroundImage: 'url(./images/benchpress.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', overflow: 'hidden',}}>
      <h3>Edit Record</h3>
        <form style={{alignItems: 'center', display: 'flex', flexDirection: 'column',}}>
          {keys.map(k=> {
            return <RecordField key={k} field={k} value={exercise[k]}/>
          })}
        </form>
        <button>
          Update
        </button>
    </div>
  )
}

export default Record