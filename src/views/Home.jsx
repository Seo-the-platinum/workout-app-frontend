import React, { useEffect, useState } from 'react';
import ExerciseList from '../components/exercises/ExerciseList';

const Home = () => {
    const [ data, setData ] = useState(null)

    useEffect(()=> {
        const fetchUser = async ()=> {
            const data = await fetch('http://127.0.0.1:5000/users/2')
            const json = await data.json()
            setData(json.user[0])
        }
        fetchUser().catch(console.error)
    },[])
  return (
    <div>
        <p>{`Hello ${data && data.user.user_name}!`}</p>
        {data?.records && <ExerciseList records={data.records}/>}
    </div>
  )
}

export default Home