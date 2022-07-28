import React, { useEffect, useState } from 'react';

const Home = () => {
    const [ user, setUser ] = useState(null)

    useEffect(()=> {
        const fetchUser = async ()=> {
            const data = await fetch('http://127.0.0.1:5000/users/2')
            const json = await data.json()
            console.log(json)
            setUser(json)
        }
        fetchUser().catch(console.error)
    },[])
    console.log(user)
  return (
    <div>
        <p></p>
    </div>
  )
}

export default Home